<template>
  <footer class="n-footer">
    <div class="container">
      <div class="n-footer__intro">
        <div class="view-home-work__subtitle">Got some to say?</div>
        <h2 class="view-home-work__title">Want more?</h2>
      </div>

      <div class="n-footer__email">
        <label class="n-footer__label">e-mail</label>
        <a href="mailto:hello@alexandremasy.com" class="link -teal">hello@alexandremasy.com</a>
      </div>

      <div class="n-footer__socials">
        <a 
          v-for="(s, i) in socials"
          :key="i"
          :href="s.href" 
          target="_blank"
          :title="s.name"
          class="n-footer__social">

          <img :src="s.icon" :alt="s.name">  
        </a>
      </div>

      <div class="n-footer__copyright">
        <svg 
          class="n-footer__glyph"
          width="72" 
          height="58" 
          viewBox="0 0 72 58" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg">
          <path d="M39.3463 29.6285L26.4782 3L3 54.8638L67.5517 28.9319" stroke="#4E575D" stroke-width="5.37931" stroke-linecap="square" stroke-linejoin="round"/>
          <path id="leg" d="M46.9307 45.9218L51.4817 55" stroke="#CC233D" stroke-width="5.37931" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="n-footer__legal">©2006 - {{ year }} Alexandre Masy</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',

  data(){
    return {
      socials: [
        { name: 'dribble', href: 'https://dribbble.com/alexandremasy', icon: '/statics/images/socials/dribbble.svg' },
        { name: 'github', href: 'https://github.com/alexandremasy', icon: '/statics/images/socials/github.svg' },
        { name: 'instagram', href: 'https://instagram.com/alexandremasy', icon: '/statics/images/socials/instagram.svg' },
        { name: 'facebook', href: 'https://facebook.com/alexandremasycom', icon: '/statics/images/socials/facebook.svg' },
        { name: 'linkedin', href: 'https://www.linkedin.com/in/alexandremasy/', icon: '/statics/images/socials/linkedin.svg' },
      ] 
    }
  },

  computed: {
    year(){
      return new Date().getFullYear()
    }
  }
}
</script>