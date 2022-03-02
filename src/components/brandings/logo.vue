<template>
  <span :class="classes">
    <svg viewBox="0 0 200 200" fill="none">
      <path 
        class="logo__bg transition-all duration-1000"
        d="M193.422 77.4162C207.282 118.119 199.312 164.799 168.819 186.12C138.499 207.44 85.8279 203.564 49.0971 178.851C12.1929 153.977 -8.77138 108.267 3.52999 69.5016C16.0046 30.5751 61.9182 -1.40601 102.634 0.0476786C143.523 1.66289 179.561 36.5514 193.422 77.4162Z" 
        fill="var(--logo-bg)"/>
      <path 
        d="M158.75 80.625L49.375 140L98.75 40.625L111.25 63.125" 
        stroke="#292E32" 
        stroke-width="14.2857" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        />
      <path 
        class="logo__accent  transition-all duration-1000"
        d="M143.345 140L139.702 134.583" 
        stroke="var(--logo-accent)" 
        stroke-width="14.2857" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        />
    </svg>
  </span>
</template>

<script>
import HueMixin from '../../utils/hue'

export default {
  name: 'BrandingLogo',

  mixins: [
    HueMixin
  ],

  props: {
    size: {
      type: String,
      default: 'm',
      validator: (value) => ['s', 'm'].includes(value)
    }
  },

  data() {
    return {
      accent: null,
      root: null
    }
  },

  computed: {
    classes(){
      return {
        'branding-logo': true,
        [!!this.hueName ? `-${this.hueName}` : '']: true,
        '-s': this.size === 's'
      }
    }
  },

  watch: {
    hueName: {
      immediate: true,
      handler(value){ 
        this.animate()
      }
    }
  },

  methods: {
    animate() {
      if (!this.root){
        return
      }
      this.root.style.setProperty("--logo-bg", `hsl(${this.hueDegree}, 98%, 98%)`);
      this.root.style.setProperty("--logo-accent", this.hueAccent);

      requestAnimationFrame(this.animate);
    },
  },

  mounted(){
    this.root = document.documentElement
    this.animate()
  }
}
</script>