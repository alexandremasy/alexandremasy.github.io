import { basil } from '@spices/basil'

export default {
  data(){
    return {
      hues: [
        {
          accent: '#CC233D',
          name: 'red',
          degree: 348,
        },
        {
          accent: '#D4552E',
          degree: 10,
          name: 'orange'
        },
        {
          accent: '#E4C030',
          degree: 45,
          name: 'yellow'
        },
        {
          accent: '#1DA07A',
          degree: 156,
          name: 'green'
        },
        {
          accent: '#189DD4',
          degree: 200,
          name: 'blue'
        },
        {
          accent: '#31CAD5',
          degree: 180,
          name: 'teal'
        },
        {
          accent: '#7B65D6',
          degree: 240,
          name: 'purple'
        },
        {
          accent: '#CB44A4',
          degree: 300,
          name: 'pink'
        },
      ],
    }
  },

  computed: {
    hue(){
      let hn = basil.get(this.$route, 'meta.hue', 'orange');
      return this.getHueByName(hn) || this.hues[0]
    },

    hueAccent(){
      return basil.get(this.hue, 'accent')
    },

    hueDegree(){
      return basil.get(this.hue, 'degree')
    },

    hueName(){
      return basil.get(this.hue, 'name')
    }
  },

  methods: {
    getHueByName(name){
      return this.hues.find(e => e.name === name) 
    }
  }
}