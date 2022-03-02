<template>
  <header class="nav-header">
    <div class="container-col-2">
      <router-link 
        class="inline-block"
        :to="{ name: 'home' }"
        @mouseenter="onMouseOver"
        @mouseleave="onMouseOut">
        <brand-logo 
          :size="size"
          />
      </router-link>
    </div>
  </header>
</template>

<script>
import BrandLogo from '../brandings/logo.vue'
import Events from '../../utils/events'

export default {
  components: {
    BrandLogo
  },

  data(){
    return {
      size: 'm'
    }
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