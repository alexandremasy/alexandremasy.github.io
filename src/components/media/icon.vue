<template>
  <i :class="classes" :aria-label="label"></i>
</template>
<script>
export default {
  name: "UiIcon",

  props: {
    glyph: {
      type: String,
      default: 'none'
    },

    label: {
      type: String
    }
  },
  
  computed: {
    classes(){
      return 'icon-' + this.glyph;
    }
  }
}
</script>
