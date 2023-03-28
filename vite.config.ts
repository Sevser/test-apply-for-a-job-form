import { defineConfig } from 'vite'
import viteConfigDefault from './config/vite/vite.config.default'

import viteConfigDevelop from './config/vite/vite.config.develop'
import viteConfigGhPages from './config/vite/vite.config.gh-pages'
import viteConfigLib from './config/vite/vite.config.lib'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return viteConfigDevelop;
  } else if (mode === 'gh-pages') {
    console.log(viteConfigGhPages)
    return viteConfigGhPages;
  } else if (mode === 'lib') {
    return viteConfigLib;
  }
  return viteConfigDefault;
})
