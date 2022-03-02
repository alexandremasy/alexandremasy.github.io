<template>
  <figure :class="classes">
    <div 
      class="media-image-slider__media"
      :class="containerClasses">

      <img 
        class="media-image-slider__img"
        :src="src"
        :sizes="imgSizes"
        alt="">
    </div>

    <figcaption
      v-if="legend"
      class="media-image-slider__legend"
      v-html="legend"
      ></figcaption>
  </figure>
</template>

<script>
export default {
  props: {
    animated: {
      type: Boolean,
      default: false
    },

    containerClasses: {},

    legend: {
      type: String
    },

    src: {
      type: String
    },

    spread: {
      type: String,
      default: '12cols',
      validator: (value) => ['12cols', 'full']
    }
  },

  computed: {
    classes(){
      return {
        'media-image-slider': true,

        '--animated': this.animated === true,

        '--12cols': this.spread === '12cols',
        '--full': this.spread === 'full'
      }
    },

    imgSizes(){
      return this.spread === 'full' ? '100vw' : '85.71vw' 
    }
  }
}
</script>