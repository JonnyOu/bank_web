import { createRouter, createWebHashHistory } from 'vue-router';
const Layout = () => import('@/layout');

// 导入路由页面的配置
import { accQueryRoute } from './accQuery.js';
import { settingsRoute } from './settings.js';
import { transferRoute } from './transfer.js';

const asyncRoutes = [
  accQueryRoute,
  settingsRoute,
  transferRoute
];

// 配置公共路由
const constRoutes = [
  {
    path: '/',
    redirect: '/index',
    meta: {
      title: '首页'
    }   
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index'),
    meta: {
      title: '首页',
      menuIndex: 'index'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/updatePwd',
    name: 'updatePwd',
    component: () => import('@/views/updatePwd'),
    meta: {
      title: '忘记密码'
    }
  },
  // 非登录错误
  {
    path: '/error',
    name: 'error',
    component: () => import('@/views/error'),
    meta: {
      title: '全局报错'
    }
  },
  // 登录后错误
  {
    path: '/errorResult',
    name: 'errorResult',
    component: Layout,
    redirect: '/errorResult/ErrorResult',
    meta: {
      title: '错误页'
    },
    children: [
      {
        path: '/errorResult/ErrorResult',
        name: 'ErrorResult',
        component: () => import('@/views/error'),
        meta: {
          title: '错误页'
        }
      }
    ]
  }
];

const { API_BASE_URL } = import.meta.env;
const allRoutes = asyncRoutes.concat(constRoutes);
const router = createRouter({
  history: createWebHashHistory(API_BASE_URL || '/'),
  routes: allRoutes
});

export default router;
