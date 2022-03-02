<template>
  <figure :class="classes">
    <div 
      class="media-video__media"
      :class="containerClasses">

      <iframe 
        class="media-video__video"
        width="560" 
        height="315" 
        :src="src" 
        title="Sayl Resto" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>

    <figcaption
      v-if="legend"
      class="media-video__legend"
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
      default: 'full',
      validator: (value) => ['12cols', 'full']
    }
  },

  computed: {
    classes(){
      return {
        'media-video': true,

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