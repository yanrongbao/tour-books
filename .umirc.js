import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/',
          component: './home',
          title: '首页',
        },
        {
          path: '/',
          component: './order',
          title: '订单',
        },
        {
          path: '/',
          component: './user',
          title: '我的',
        },
      ],
    },
  ],
  fastRefresh: {},
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
  ],
});
