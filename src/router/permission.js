import router from '@/router';

const menu = ref([]);

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const store_useCommonStore = useCommonStore();
  // 持久化菜单信息
  setMenu(to);
  store_useCommonStore.menu = menu;
  store_useCommonStore.path = to.path;
  // 获取默认选中菜单
  store_useCommonStore.defaultSelectMenu = getDefaultSelectMenu();

  next();
});

// 二级、三级菜单渲染
const setMenu = (to) => {
  const applyMenuArr = ['accQuery', 'settings', 'transfer'];
  const menuName = to.matched[0].name;
  for (const item of applyMenuArr) {
    if (item === menuName) {
      applyMenu(to.matched[0].children);
    }
  }
};

const applyMenu = (menuData) => {
  menu.value = [];
  for (const item of menuData) {
    const secondItem = {};
    secondItem.label = item.meta.title;
    secondItem.path = item.path;
    if (item.children) {
      const children = [];
      for (const childrenItem of item.children) {
        const thirdMenuItem = {};
        thirdMenuItem.label = childrenItem.meta.title;
        thirdMenuItem.path = childrenItem.path;
        children.push(thirdMenuItem);
      }
      secondItem.children = children;
    }
    menu.value.push(secondItem);
  }
};

/**
 * 获取一级菜单下第一个子菜单，如果是三级菜单，菜单应该默认展开
 */
const getDefaultSelectMenu = () => {
  const item = menu.value[0];
  if (item && item.children) { // 三级菜单
    return item.children[0].path;
  } else if (item) { // 二级菜单
    return item.path;
  }
};