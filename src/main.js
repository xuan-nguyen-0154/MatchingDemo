import { createApp } from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import mitt from 'mitt'
import VueCookies from 'vue-cookies'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import router from './routes';
import Store from './store'

const app = createApp(App)
const emitter = mitt()
app.config.globalProperties.emitter = emitter
app.use(ElementPlus)
app.use(VueCookies)
app.use(Store)
app.use(router)

app.mount('#app')
