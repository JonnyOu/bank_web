import Layout from '@/layout';

export const accQueryRoute = {
  path: '/accQuery',
  name: 'accQuery',
  component: Layout,
  redirect: '/accQuery/accInfo',
  meta: {
    id: 'accQuery',
    title: '账户查询',
    titleI18nKey: 'menu.accQuery',
    icon: 'apps-line',
    menuIndex: 'accQuery'
  },
  children: [
    {
      path: '/accQuery/accInfo',
      name: 'accInfo',
      component: () => import('@/views/accQuery/accInfo'),
      meta: {
        id: 'accInfo',
        title: '账户概览',
        titleI18nKey: 'menu.accInfo',
        icon: 'apps-line',
      },
    },
    {
      path: '/accQuery/operateRecord',
      name: 'operateRecord',
      component: () => import('@/views/accQuery/operateRecord'),
      meta: {
        id: 'operateRecord',
        title: '最近操作记录',
        titleI18nKey: 'menu.operateRecord',
        icon: 'apps-line',
      },
    },
    {
      path: '/accQuery/transferRecord',
      name: 'transferRecord',
      component: () => import('@/views/accQuery/transferRecord'),
      meta: {
        id: 'transferRecord',
        title: '交易记录',
        titleI18nKey: 'menu.transferRecord',
        icon: 'apps-line',
      },
    },
  ]
};