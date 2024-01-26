import Layout from '@/layout';

export const settingsRoute = {
  path: '/settings',
  name: 'settings',
  component: Layout,
  redirect: '/settings/phoneService',
  meta: {
    id: 'settings',
    title: '设置中心',
    titleI18nKey: 'menu.settings',
    icon: 'apps-line',
  },
  children: [
    {
      path: '/settings/phoneService',
      name: 'phoneService',
      component: () => import('@/views/settings/phoneService'),
      redirect: '/settings/phoneService',
      meta: {
        id: 'phoneService',
        title: '电子渠道手机号服务',
        titleI18nKey: 'menu.phoneService',
        icon: 'apps-line',
      },
    },
    {
      path: '/settings/resetPassword',
      name: 'resetPassword',
      component: () => import('@/views/settings/resetPassword'),
      redirect: '/settings/resetPassword',
      meta: {
        id: 'resetPassword',
        title: '更改密码',
        titleI18nKey: 'menu.resetPassword',
        icon: 'apps-line',
      },
    }
  ]
}