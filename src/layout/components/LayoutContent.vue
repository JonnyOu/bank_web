<script setup>
const route = useRoute();
const router = useRouter();
const selectedKeys2 = ref(['1']);
const openKeys = ref(['sub1']);
const menu = ref([]);


watch(() => route.path, () => {
  // 重新渲染菜单
  const applyMenuArr = ['accQuery', 'settings', 'transfer'];
  const menuName = route.matched[0].name;
  for (const item of applyMenuArr) {
    if (item === menuName) {
      applyMenu(route.matched[0].children);
    }
  }
});

// 二级、三级菜单渲染
const applyMenu = (menuData) => {
  menu.value = [];
  for (const item of menuData) {
    const secondItem = {};
    secondItem.label = item.meta.title;
    secondItem.key = item.meta.id;
    if (item.children) {
      const children = [];
      for (const childrenItem of item.children) {
        const thirdMenuItem = {};
        thirdMenuItem.label = childrenItem.meta.title;
        thirdMenuItem.key = childrenItem.meta.key;
        children.push(thirdMenuItem);
      }
      secondItem.children = children;
    }
    menu.value.push(secondItem);
  }
};

// todo 二级、三级路由跳转
// const jumpMenu = () => {
        
// }

</script>

<template>
  <a-layout-content style="padding: 0 50px">
    <!-- todo 路径 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>1</a-breadcrumb-item>
      <a-breadcrumb-item>2</a-breadcrumb-item>
      <a-breadcrumb-item>3</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 左侧菜单 -->
    <a-layout style="height: 80vh; padding: 24px 0; background: #fff">
      <a-layout-sider width="200" style="background: #fff;">
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          style="height: 100%"
          :items="menu"
        />
      </a-layout-sider>
      <!-- 展示内容 -->
      <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<style scoped>

</style>
