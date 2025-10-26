import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css'
import ContextMenu from '@imengyu/vue3-context-menu'

// import BaiduCalendar from "vue-baidu-calendar"

import Antd from 'ant-design-vue';


const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(Antd)
app.use(ContextMenu)
// app.use(BaiduCalendar)

app.mount('#app')
