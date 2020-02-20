/**
 * 在此js文件中，配置所有前端路由
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import demoComponents from './demo-components';
import { isAuthPage } from 'js/config/menu-config';

Vue.use(VueRouter);

const initRouter = () => {
  const routerParam = {
    mode: 'history',
    routes: [{
      path: '/login',
      name: 'Login',
      component: (resolve) => require(['components/login/index'], resolve)
    }, {
      path: '/',
      component: (resolve) => require(['components/app/app-frame'], resolve),
      children: [{
        path: '',
        name: 'Home',
        component: (resolve) => require(['components/home/index'], resolve),
        meta: { title: '首页', icon: 'icon-monitor' }
      }, {
        path: '/system-error',
        name: 'SystemError',
        component: (resolve) => require(['components/error-pages/500'], resolve),
        meta: { title: '系统错误' }
      }, {
        path: '/permission-error',
        name: 'PermissionError',
        component: (resolve) => require(['components/error-pages/403'], resolve),
        meta: { title: '权限错误' }
      },
      {
        path: '/notfound-error',
        name: 'NotfoundError',
        component: (resolve) => require(['components/error-pages/404'], resolve),
        meta: { title: '页面找不到' }
      },
      ...demoComponents, //实例组件的路由（里面只有“安全设置”，后续自行转移）
      {
        path: '*',
        name: 'CommonNotfoundError',
        component: (resolve) => require(['components/error-pages/404'], resolve),
        meta: { title: '页面找不到' }
      }]
    }]
  };

  let router = new VueRouter(routerParam);
  let isFirstRouter = true;

  router.beforeEach((to, from, next) => {
    //判断权限
    if (!isFirstRouter && !isAuthPage(to.name)) {
      next({ name: 'PermissionError' });
      return;
    }
    //开启进度条
    HeyUI.$LoadingBar.start();
    //修改title
    if (to.meta && to.meta.title) {
      document.title = to.meta.title + ' - ' + Website.suffixTitle;
    } else {
      document.title = Website.defaultTitle;
    }
    isFirstRouter = false;
    next();
  });
  router.afterEach(() => {
    //成功关闭进度条
    HeyUI.$LoadingBar.success();
    //页面滚动置顶
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    let layoutContent = document.querySelector('.h-layout-content');
    if (layoutContent) {
      layoutContent.scrollTop = 0;
    }
  });
  return router;
};

export default initRouter;
