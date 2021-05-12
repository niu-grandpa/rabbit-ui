import { createApp } from 'vue'
import Routers from './routers'
import App from '@/App.vue'

const app = createApp(App)

app.use(Routers)
app.mount('#app')
