import { createApp } from 'vue';
import Element from 'plugin/element';
import Router from './routes';
import App from './App.vue';

import 'styles/App.less';

const app = createApp(App);

usePlugins([Router, ...Element]);

app.mount('#app');

function usePlugins(plugins: [...any]): void {
    for (let i = 0, len = plugins.length; i < len; i++) {
        app.use(plugins[i]);
    }
}
