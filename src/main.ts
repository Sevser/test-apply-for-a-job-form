import { createApp } from 'vue'
import App from './App.vue';

import './assets/main.css'
import { registerPlugins } from './plugins'

const app = createApp(App)
registerPlugins(app);

app.mount('#app-test-apply-form')
