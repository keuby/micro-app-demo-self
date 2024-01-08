import { defineConfig } from '@umijs/max';

export default defineConfig({
  npmClient: 'pnpm',
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  model: {},
  initialState: {},
  routes: [
    {
      path: '/',
      redirect: '/react18-with',
    },
    {
      component: '@/pages/react18-iframe',
      path: '/react18-iframe',
    },
    {
      component: '@/pages/react18-with',
      path: '/react18-with',
    },
  ],
  unocss: {
    watch: ['src/**/*.tsx'],
  },
});
