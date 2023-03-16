import { createPinia } from "pinia";
import type { App } from "vue";
import { loadFonts } from "./fontLoader";
import vuetify from "./vuetify";

import * as components from 'vuetify/components';

export function registerPlugins(app: App) {
  loadFonts();
  app.use(createPinia());
  app.use(vuetify);
  Reflect.ownKeys(components).forEach((key) => {
    app.component(key as string, components[key as keyof typeof components])
  })
}