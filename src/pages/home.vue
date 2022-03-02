<template>
  <div class="flow">

    <!-- Header::Intro -->
    <header class="intro container-col-2">
      <div class="flow md-pr-col-3">
        <div class="intro__greetings inline-block px-4 py-2 rounded bg-light-00 body2 text-light-50">🖖 Hey There</div>
        <h1 class="h1 text-light-90">Alexandre Masy - A product designer with a focus on the user experience.</h1>
        <div class="intro__about body1 text-light-60 flow-xs">
          <p>I’m a creative who mixes design 🎨 and technology 💻 to create <span class="text-red-50">b</span><span class="text-orange-50">e</span><span class="text-yellow-50">a</span><span class="text-green-50">u</span><span class="text-blue-50">t</span><span class="text-teal-50">i</span><span class="text-purple-50">f</span><span class="text-pink-50">u</span><span class="text-red-50">l</span><span class="text-orange-50">™</span> things. Combining well-studied user experience with a balanced, harmonious and consistent design from conception to production.</p>
          <p>That's the spicy mix 🌶, I'm aiming to foster good products. 🚀</p>
          <p>My current mission is with <span class="text-green-50">🏦 BNP Paribas Fortis as Concept Designer.</span></p>
        </div>
      </div>
    </header>

    <!-- Section::Work -->
    <section class="work container">
      <div class="pl-col-1 pr-col-1 flow-s py-10 md:py-16 md:rounded bg-light-00">
        <header class="work__header">
          <h2 class="h2 flow-xs2">
            <div class="text-light-50">Craftsman for over 15 years</div>
            <div class="text-light-70" >Crafted over the past few years</div>
          </h2>
        </header>

        <div class="work__projects flow-xs">

          <!-- Project :: Sayl -->
          <router-link 
            class="work__project project"
            tag="article" 
            :to="{ name: 'case-sayl' }"
            @mouseenter="onMouseOver($event, 'teal')"
            @mouseleave="onMouseOut">
            <figure class="project__figure">
              <img class="project__cover" src="/statics/projects/sayl/sayl-cover.png" alt="Sayl Cover">
            </figure>

            <div class="project__content flow">
              <div class="flow-xs2">
                <div class="project__name">Sayl</div>
                <div class="project__about">Product - Branding - Architect</div>
              </div>

              <a href="#" class="link -teal">Serve Better. Serve More.</a>
            </div>
          </router-link>

          <div class="separator"></div>
          
          <!-- Project :: IDF -->
          <router-link 
            class="work__project project"
            tag="article" 
            :to="{ name: 'case-idf' }"
            @mouseenter="onMouseOver"
            @mouseleave="onMouseOut">
            <figure class="project__figure">
              <img class="project__cover" src="/statics/projects/idf/idf-cover.png" alt="IDF Cover">
            </figure>

            <div class="project__content flow">
              <div class="flow-xs2">
                <div class="project__name">International Duty Free</div>
                <div class="project__about">UX Architect - UI Design</div>
              </div>

              <a href="#" class="link -orange">Premium e-shop on the go.</a>
            </div>
          </router-link>

          <div class="separator"></div>

          <!-- Project :: CDM -->
          <router-link 
            class="work__project project"
            :to="{ name: 'case-cdm' }"
            @mouseenter="onMouseOver($event, 'blue')"
            @mouseleave="onMouseOut">
            <figure class="project__figure">
              <img class="project__cover" src="/statics/projects/cdm/cdm-cover.png" alt="CDM Cover">
            </figure>

            <div class="project__content flow">
              <div class="flow-xs2">
                <div class="project__name">La Cité des Métiers - Brussels</div>
                <div class="project__about">Branding - Product - Architect</div>
              </div>

              <a href="#" class="link -blue">Get back to school.</a>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Events from '../utils/events'

export default {
  name: 'HomeView',

  methods: {
    onMouseOver(event, hue){
      Events.$emit('cursor.enter', event.target, hue)
    },

    onMouseOut(){
      Events.$emit('cursor.leave')
    }
  }

}
</script>