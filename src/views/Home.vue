<template>
  <div class="view">
    <!-- Figures -->
    <div class="view-home__figures">
      <!-- Top Left -->
      <object 
        class="view-home__figure view-home__top-left"
        id="top-left" 
        type="image/svg+xml" 
        data="statics/images/top-left.svg"></object>
      
      <!-- Top Right -->
      <object 
        class="view-home__figure view-home__top-right"
        id="top-right" 
        type="image/svg+xml" 
        data="statics/images/top-right.svg"></object>

      <!-- Bottom Right -->
      <object 
        class="view-home__figure view-home__bottom-right"
        id="bottom-right" 
        type="image/svg+xml" 
        data="statics/images/bottom-right.svg"></object>
    </div>

    <main class="main">

      <!-- Logo -->
      <div class="view-home__logo container">
        <a href="/">
          <svg 
            class="view-home__glyph"
            width="72" 
            height="58" 
            viewBox="0 0 72 58" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M39.3463 29.6285L26.4782 3L3 54.8638L67.5517 28.9319" stroke="#4E575D" stroke-width="5.37931" stroke-linecap="square" stroke-linejoin="round"/>
            <path id="leg" d="M46.9307 45.9218L51.4817 55" stroke="#CC233D" stroke-width="5.37931" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- Intro -->
      <div class="view-home__intro container">
        <p class="view-home__greeting">Hey There 🖖</p>
        <h1 class="view-home__name">This is Alexandre Masy</h1>
        <h2 class="view-home__title">I'm a UI Architect + Engineer<br/> with a knack for the UX</h2>
      </div> 

      <!-- TLDR -->
      <div class="view-home__tldr container">
        <div class="view-home__greeting">In a nutshell</div>
        <div class="view-home__description">
          <p>I’m a creative who mixes design and technology to create <em>beautiful</em> ™ things. Combining well-studied user experience with a balanced, harmonious and consistent design from conception to realisation. That's the spicy mix, I'm aiming to foster good products.</p>
          <p>With more than <a class="link -teal" href="https://linkedin.com/in/alexandremasy" target="_blank">a decade of experience</a>, I’ve been lucky to join all kind of team, as a lead or not, been rewarded by crafting amazing experiences, while being amazed by all the extraordinary people I had the chance to work with.</p>
          <p>Currently, as Product Designer for <a href="https://infinity-mobile.io" class="link -blue" target="_blank">Infinity-Mobile</a> you’ll find me behind products like <a class="link -teal" href="https://sayl.cloud" target="_blank">Sayl</a> and <a class="link -red" href="https://shopitag.com" target="_blank">Shopitag</a>. On the side, I'm conducting a <a  class="link -yellow" href="https://spices.alexandremasy.com" target="_blank">research project</a> with the aim easing my whole lifecycle around design system.</p>
        </div>
      </div>

      <!-- Work -->
      <home-work />

      <!-- Footer -->
      <navigation-footer />
    </main>
  </div>
</template>

<script>
import HomeWork from './components/home-work'
import NavigationFooter from './components/navigations/footer'

export default {
  name: 'Home',

  components: {
    HomeWork,
    NavigationFooter
  }
}
</script>
