import defaultConfig from './vite.config.default';

export default Object.assign(defaultConfig(), {
  base: '/test-apply-for-a-job-form/',
  build: {
    outDir: './dist/gh-pages',
  },
});