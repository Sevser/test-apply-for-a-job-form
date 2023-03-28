import { resolve } from 'node:path';
import defaultConfig from './vite.config.default';

export default Object.assign(defaultConfig(), {
  build: {
    outDir: './dist/lib',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/library.ts'),
      name: 'apply-form',
      // the proper extensions will be added
      fileName: 'apply-form',
    },
    rollupOptions: {
      input: {
        library: 'src/library.ts',
      }
    },
  },
});