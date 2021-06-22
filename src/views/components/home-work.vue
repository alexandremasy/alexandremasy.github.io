<template>
  <div class="view-home-work">
    <div class="view-home-work__intro">
      <div class="container">
        <div class="view-home-work__subtitle">I'm the one.</div>
        <h2 class="view-home-work__title">I craft theses babies!</h2>
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
          klass: '-teal',
          title: 'Sayl',
          description: 'Branding - Product - Architect',
          cta: 'Wave the flag',
          href:'https://sayl.cloud',
          i: '01',
          figure: 'statics/images/projects/sayl.svg'
        },
        {
          klass: '-orange',
          title: 'Shopitag',
          description: 'Branding - Product',
          cta: 'Everyone onboard',
          href:'https://shopitag.com',
          i: '02',
          figure: 'statics/images/projects/shopitag.svg'
        },
        {
          klass: '-yellow',
          title: 'Spices',
          description: 'Branding - Product - Architect',
          cta: 'Spice up your life',
          href:'https://spices.alexandremasy.com',
          i: '03',
          figure: 'statics/images/projects/spices.svg'
        },
      ]
    }
  }
}
</script>