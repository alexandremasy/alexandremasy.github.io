import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './pages/routes'
import Icon from './components/media/icon.vue'

const app = createApp(App);
app.use(router);
app.mount('#app');
app.component('icon', Icon);
