<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AOS from 'aos'

export default {
  mounted(){
    AOS.init({
      duration: 600,
      delay: 100
    })
  }
}
</script>