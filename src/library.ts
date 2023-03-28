import { createApp } from 'vue'
import App from './components/form/ApplyForm.vue';

import './assets/main.css'
import { registerPlugins } from './plugins'

export interface InstallProps {
  selector: string;
}

const install = (props: InstallProps) => {
  const app = createApp(App)
  registerPlugins(app);

  app.mount(props.selector);
  return app;
}

export default install;
