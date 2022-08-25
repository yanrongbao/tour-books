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
          path: '/order',
          component: './order',
          title: '订单',
        },
        {
          path: '/user',
          component: './user',
          title: '我的',
        },
        {
          path: '/search',
          component: './search',
          title: '搜索',
        },
        {
          path: '/house',
          component: './house',
          title: '房屋详情',
        },
      ],
    },
  ],
  fastRefresh: {},
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
  ],
  lessLoader: {},
  alias: {
    '@': ['/src'],
  },
});
