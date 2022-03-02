<template>
  <footer class="nav-footer pt-8">
    <div class="container-col-2 flow-xs">
      <!-- Intro -->
      <h2 class="h2">Wanna talk?</h2>

      <!-- Contact -->
      <div class="flex flex-col md:flex-row gap-1 justify-between">
        
        <a 
          href="mailto:hello@alexandremasy.com" 
          class="inline-block body3 text-orange-50 bg-light-00 px-2 md:px-4 py-2 rounded" 
          target="_blank">hello@alexandremasy.com</a>

        <div class="social flex gap-4 mt-4 md:mt-0">
          <a 
            href="https://www.linkedin.com/in/alexandremasy/" 
            target="_blank" 
            ref="nofollow noopener"
            @mouseenter="onMouseOver"
            @mouseleave="onMouseOut">
            <img class="opacity-50 hover:opacity-100 transition-opacity duration-500" src="/statics/images/linkedin.svg" alt="Linkedin">
          </a>
          <a 
            href="https://dribbble.com/alexandremasy" 
            target="_blank" 
            ref="nofollow noopener"
            @mouseenter="onMouseOver"
            @mouseleave="onMouseOut">
            <img class="opacity-50 hover:opacity-100 transition-opacity duration-500" src="/statics/images/dribbble.svg" alt="Dribbble">
          </a>
          <a 
            href="https://www.facebook.com/alexandremasycom" 
            target="_blank" 
            ref="nofollow noopener"
            @mouseenter="onMouseOver"
            @mouseleave="onMouseOut">
            <img class="opacity-50 hover:opacity-100 transition-opacity duration-500" src="/statics/images/facebook.svg" alt="Facebook">
          </a>
          <a 
            href="https://github.com/alexandremasy" 
            target="_blank" 
            ref="nofollow noopener"
            @mouseenter="onMouseOver"
            @mouseleave="onMouseOut">
            <img class="opacity-50 hover:opacity-100 transition-opacity duration-500" src="/statics/images/github.svg" alt="Github">
          </a>
          <a 
            href="https://www.instagram.com/alexandremasy/" 
            target="_blank" 
            ref="nofollow noopener"
            @mouseenter="onMouseOver"
            @mouseleave="onMouseOut">
            <img class="opacity-50 hover:opacity-100 transition-opacity duration-500" src="/statics/images/instagram.svg" alt="Instagram">
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="flex align-middle gap-4 border-t border-t-light-10 pt-4 md:pt-6">
        <branding-logo size="s" />
        <p class="body4 text-light-50">©2006 - 2022 Alexandre Masy</p>
      </div>
    </div>
  </footer>
</template>

<script>
import BrandingLogo from '../brandings/logo.vue'
import Events from '../../utils/events'

export default {
  components: {
    BrandingLogo
  },
  
  methods: {
    onMouseOver(event){
      Events.$emit('cursor.enter', event.target)
    },

    onMouseOut(){
      Events.$emit('cursor.leave')
    }
  }
}
</script>