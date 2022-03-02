<template>
    <svg
        ref="cursor" 
        class="cursor">
        
        <defs>
            <filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%" 
            filterUnits="objectBoundingBox">
                <feTurbulence type="fractalNoise" baseFrequency="0" numOctaves="1" result="warp" />
                <feOffset dx="-30" result="warpOffset" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warpOffset" />
            </filter>
        </defs>

        <!-- <circle class="cursor__inner" cx="110" cy="110" r="55"/> -->
        <rect
            class="cursor__rect" 
            x="0" 
            y="0" 
            width="220" 
            height="220" 
            rx="8"
            />

    </svg>
</template>

<script>
import { gsap } from 'gsap';
import { basil } from '@spices/basil'
import Events from '../../utils/events'
import HueMixin from '../../utils/hue'

const calcWinsize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};

// Calculate the viewport size
let winsize = calcWinsize();
window.addEventListener('resize', () => {
    winsize = calcWinsize();
});

// Track the mouse position
let mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', ev => mouse = getMousePos(ev));

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;


// Gets the mouse position
const getMousePos = e => {
    return {
        x: e.clientX,
        y: e.clientY
    };
};

class Cursor {
    constructor(el) {
        this.root = document.documentElement

        this.DOM = { el: el };
        this.DOM.el.style.opacity = 0;
        // this.DOM.circleInner = this.DOM.el.querySelector('.cursor__inner');
        this.DOM.rectInner = this.DOM.el.querySelector('.cursor__rect');

        this.radius = {
            enter: 50,
            leave: 16
        }

        this.filterId = '#filter-1';
        this.DOM.feTurbulence = document.querySelector(`${this.filterId} > feTurbulence`);

        this.primitiveValues = { turbulence: 0 };

        this.createTimeline();

        this.bounds = this.DOM.el.getBoundingClientRect();

        this.renderedStyles = {
            tx: { previous: 0, current: 0, amt: 0.2 },
            ty: { previous: 0, current: 0, amt: 0.2 },
            radius: { previous: this.radius.leave, current: this.radius.leave, amt: 0.2 },
            width: { previous: this.radius.leave, current: this.radius.leave, amt: 0.2 },
            height: { previous: this.radius.leave, current: this.radius.leave, amt: 0.2 },
        };

        this.onMouseMoveEv = () => {
            this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2;
            this.renderedStyles.ty.previous = this.renderedStyles.ty.current = mouse.y - this.bounds.height / 2;
            gsap.to(this.DOM.el, { duration: 0.9, ease: 'Power3.easeOut', opacity: 1 });
            requestAnimationFrame(() => this.render());
            window.removeEventListener('mousemove', this.onMouseMoveEv);
        };
        window.addEventListener('mousemove', this.onMouseMoveEv);
    }
    render() {
        // if no target
        if (!this.target){
            // this.renderedStyles['tx'].current = mouse.x - this.bounds.width / 2 + 4;
            // this.renderedStyles['ty'].current = mouse.y - this.bounds.height / 2 + 4;
            this.renderedStyles['tx'].current = mouse.x - 4;
            this.renderedStyles['ty'].current = mouse.y - 4;
        }
        // If there is a target
        else {
            let r = this.target.getBoundingClientRect();

            this.renderedStyles['tx'].current = r.x - 8
            this.renderedStyles['ty'].current = r.y - 8
        }

        for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }

        this.DOM.el.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px)`;
        // this.DOM.circleInner.setAttribute('r', this.renderedStyles['radius'].previous);
        this.DOM.rectInner.setAttribute('width', this.renderedStyles['width'].previous)
        this.DOM.rectInner.setAttribute('height', this.renderedStyles['height'].previous)

        requestAnimationFrame(() => this.render());
    }
    createTimeline() {
        // init timeline
        this.tl = gsap.timeline({
            paused: true,
            onStart: () => {
                // this.DOM.circleInner.style.filter = `url(${this.filterId}`;
                this.DOM.rectInner.style.filter = `url(${this.filterId}`;
            },
            onUpdate: () => {
                this.DOM.feTurbulence.setAttribute('baseFrequency', this.primitiveValues.turbulence);
            },
            onComplete: () => {
                // this.DOM.circleInner.style.filter = 'none';
                this.DOM.rectInner.style.filter = 'none';
            }
        })
            .to(this.primitiveValues, {
                duration: 0.4,
                startAt: { turbulence: 0.03 },
                turbulence: 0
            });
    }
    enter(hue, target) {
        this.target = target;

        // Rectangle
        let r = this.target.getBoundingClientRect();
        this.renderedStyles['width'].current = r.width + 16;
        this.renderedStyles['height'].current = r.height + 16;

        // Circle
        this.renderedStyles['radius'].current = this.radius.enter;

        // Stroke color
        this.root.style.setProperty("--cursor-stroke", `hsl(${ hue }, 80%, 80%)`);

        // Fire!
        this.tl.restart();
    }
    leave(stroke = '#b4bec4') {
        this.target = null

        this.renderedStyles['width'].current = this.radius.leave;
        this.renderedStyles['height'].current = this.radius.leave;
        this.renderedStyles['radius'].current = this.radius.leave;
        this.root.style.setProperty("--cursor-stroke", stroke);
        this.tl.progress(1).kill();
    }
}

export default  {
    name: 'BrandingCursor',

    mixins: [
        HueMixin
    ],

    data(){
        return {
            cursor: null,
        }
    },

    methods: {
        onEnter(target, hue){
            let h = basil.get(this.getHueByName(hue), 'degree', this.hueDegree)
            this.cursor.enter( h, target );
        },

        onLeave(){
            this.cursor.leave();
        }
    },

    mounted(){
        this.cursor = window.cursor = new Cursor( this.$refs.cursor )

        Events.$on('cursor.enter', this.onEnter)
        Events.$on('cursor.leave', this.onLeave)
    }
}

</script>