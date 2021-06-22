<template>
  <div 
    class="work-item">

    <div class="work-item__part work-item__content">
      <div class="work-item__intro">
        <div class="work-item__i">{{ i }}</div>
        <div class="work-item__n">•</div>
        <div class="work-item__n">03</div>
      </div>

      <div class="work-item__primary">
        <div class="work-item__title">{{ title }}</div>
        <div class="work-item__description">{{ description }}</div>

        <a 
          :href="href"
          class="work-item__cta link"
          :class="klass">{{ cta }}</a>
      </div>
    </div>

    <figure class="work-item__part work-item__figure">
      <img class="work-item__image" :src="figure" :alt="title">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'HomeWorkItem',

  props: {
    cta: {
      type:String
    },

    description: {
      type: String
    },

    figure: {
      type: String
    },

    i: {
      type: String
    },

    href: {
      type: String
    },

    klass: {
      type: String
    },

    title: {
      type: String
    },
  }
}
</script>