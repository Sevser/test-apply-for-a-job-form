import { createPinia } from "pinia";
import type { App } from "vue";
import { loadFonts } from "./fontLoader";
import vuetify from "./vuetify";

import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import * as components from 'vuetify/components';

export function registerPlugins(app: App) {
  loadFonts();
  app.use(createPinia());
  app.use(vuetify);
  app.component('DatepickerField', Datepicker);
  Reflect.ownKeys(components).forEach((key) => {
    app.component(key as string, components[key as keyof typeof components])
  })
}