import { createApp } from 'vue'
import Routers from './routers'
import Antd from './plugins/antd'
import App from '@/App.vue'

const app = createApp(App)
const usePlugins = (plugins: [...any]) => plugins.forEach((plugin) => app.use(plugin))

app.use(Routers)
usePlugins(Antd)

app.mount('#app')
