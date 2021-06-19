<template>
  <div class="view-home-work">
    <div class="view-home-work__intro">
      <div class="container">
        <div class="view-home-work__subtitle">What’s up men?</div>
        <h2 class="view-home-work__title">My Daily Pixel Work</h2>
      </div>
    </div>

    <div class="view-home-work__content">
      <div class="container">
        <home-work-item
          v-for="(c, i) in children"
          :key="i"
          v-bind="c" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeWorkItem from './home-work-item'

export default {
  name: 'HomeWork',

  components: {
    HomeWorkItem,
  },

  data(){
    return {
      children: [
        {
          title: 'Sayl',
          description: 'Branding - Product design - Lead Frontend & Architect',
          cta: 'Onboard for a journey',
          href:'https://sayl.cloud',
          figure: 'statics/images/projects/sayl.svg'
        },
        {
          title: 'Shopitag',
          description: 'Branding - UX & UI Design - Frontend development',
          cta: 'Everyone onboard',
          href:'https://shopitag.com',
          figure: 'statics/images/projects/shopitag.svg'
        },
        {
          title: 'Spices',
          description: 'One men show',
          cta: 'Spice up your life',
          href:'https://spices.alexandremasy.com',
          figure: 'statics/images/projects/spices.svg'
        },
      ]
    }
  }
}
</script>