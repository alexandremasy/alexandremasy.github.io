import { createWebHistory, createRouter } from "vue-router";
import Events from '../utils/events'

import HomePage from './home.vue'
import SaylPage from './projects/sayl.vue'
import IDFPage from './projects/idf.vue'
import CDMPage from './projects/cdm.vue'

const routes = [
  // Home
  { 
    path: '/', 
    component: HomePage, 
    name: 'home',
    meta: {
      hue: 'orange'
    }
  },

  // Sayl
  { 
    path: '/cases/sayl', 
    component: SaylPage, 
    name: 'case-sayl',
    meta: {
      hue: 'teal'
    }
  },
  
  // IDF
  { 
    path: '/cases/idf', 
    component: IDFPage, 
    name: 'case-idf',
    meta: {
      hue: 'orange'
    }
  },
  

  // CDM
  { 
    path: '/cases/cdm', 
    component: CDMPage, 
    name: 'case-cdm',
    meta: {
      hue: 'blue'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition){
    window.scrollTo(0, 0);
    return {x: 0, y: 0}
  }
});

router.beforeEach(() => {
  Events.$emit('cursor.leave')
})


export default router