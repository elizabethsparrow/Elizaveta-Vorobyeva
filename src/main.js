import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import styles from '../public/index.css'
import UI from './components/UI/index.js'

let app = createApp(App)
app.use(router).use(styles)
UI.forEach(elem => {
  app.component(elem.name, elem)
});


app.mount('#app')


