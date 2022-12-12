import { createRouter, createWebHistory } from 'vue-router';

/* Layout */
import Layout from '@/layout/index.vue';

export const constantRoutes = [
  // {
  //   path: "/",
  //   component: () => import("@/views/dashboard/index.vue"),
  //   hidden: true,
  // },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true,
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true,
  },
  // {
  //   path: '/customPage',
  //   component: () => import('@/views/customizePage/index.vue'),
  //   name: 'customPage',
  //   meta: { title: '自定义页面', icon: 'el-icon-eleme', affix: true },
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: false,
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: '自定义页面', icon: 'el-icon-eleme', affix: true },
      },
      // {
      //   path: '/customPage',
      //   component: () => import('@/views/customizePage/index.vue'),
      //   name: 'Dashboard',
      //   meta: { title: '自定义页面', icon: 'el-icon-eleme', affix: true }
      // }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  // [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
});

export default router;
