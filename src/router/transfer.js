import Layout from '@/layout';
import PageView from '@/layout/pageView';

export const transferRoute = {
  path: '/transfer',
  name: 'transfer',
  component: Layout,
  redirect: '/transfer/selfBankOnLocal',
  meta: {
    id: 'transfer',
    title: '转账汇款',
    titleI18nKey: 'menu.transfer',
    icon: 'apps-line',
  },
  children: [
    {
      path: '/transfer/selfBankOnLocal',
      name: 'selfBankOnLocal',
      component: () => import('@/views/transfer/selfBankOnLocal'),
      meta: {
        id: 'selfBankOnLocal',
        title: '本行转账',
        titleI18nKey: 'menu.selfBankOnLocal',
        icon: 'apps-line',
      },
    },
    {
      path: '/transfer/fps',
      name: 'fps',
      component: PageView,
      
      meta: {
        id: 'fps',
        title: 'FPS过数易',
        titleI18nKey: 'menu.fps',
        icon: 'apps-line',
      },
      children: [
        {
          path: '/transfer/fps/fpsTransfer',
          name: 'fpsTransfer',
          component: () => import('@/views/transfer/fps/fpsTransfer'),
          meta: {
            id: 'fpsTransfer',
            title: 'FPS转账',
            titleI18nKey: 'menu.fpsTransfer',
            icon: 'apps-line',
          },
        },
        {
          path: '/transfer/fps/fpsRegister',
          name: 'fpsRegister',
          component: () => import('@/views/transfer/fps/fpsRegister'),
          meta: {
            id: 'fpsRegister',
            title: 'FPS登记',
            titleI18nKey: 'menu.fpsRegister',
            icon: 'apps-line',
          },
        },
      ]
    }
  ]
}