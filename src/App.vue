<template>
  <nav-header />
  <router-view />
  <nav-footer />
  <branding-cursor />

  <div class="debug" v-if="false">
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
    <div class="debug__item"></div>
  </div>
</template>

<script setup>
import NavHeader from './components/navigations/header.vue'
import NavFooter from './components/navigations/footer.vue'

import BrandingCursor from './components/brandings/cursor.vue'
</script>