const Layout = () => import('@/layout');

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
    menuIndex: 'settings'
  },
  children: [
    {
      path: '/settings/phoneService',
      name: 'phoneService',
      component: () => import('@/views/settings/phoneService'),
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
      meta: {
        id: 'resetPassword',
        title: '更改密码',
        titleI18nKey: 'menu.resetPassword',
        icon: 'apps-line',
      },
    },
    {
      path: '/settings/fileOperate',
      name: 'fileOperate',
      component: () => import('@/views/settings/fileOperate'),
      meta: {
        id: 'fileOperate',
        title: '文件上传/下载',
        titleI18nKey: 'menu.fileOperate',
        icon: 'apps-line',
      },
    }
  ]
};