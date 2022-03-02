<template>
  <section 
    :class="classes">
    <div 
      class="media-grid__container"
      :style="styles">
      <div 
        v-for="(a, i) in value"
        :key="i"
        class="media-grid__col">

        <img
          class="media-grid__picture" 
          :key="`${i}-${j}`" 
          :src="b" 
          v-for="(b, j) in a"
          />

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MediaGrid",

  props: {
    direction: {
      type: String,
      default: 'v',
      validator: (value) => ['h', 'v'].includes(value)
    },

    transform: {
      type: String,
    },

    value: {
      type: Array
    }
  },

  computed: {
    classes(){
      return {
        'media-grid': true,

        '-h': this.direction === 'h',
        '-v': this.direction === 'v'
      }
    },

    styles(){
      let ret = {}

      if (this.transform){
        ret.transform = this.transform
      }

      return ret
    }
  }
}
</script>