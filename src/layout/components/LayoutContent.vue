<script setup>
const store_useCommonStore = useCommonStore();
const router = useRouter();
const selectedKey = ref([]);

watch(() => store_useCommonStore.defaultSelectMenu, () => {
  selectedKey.value = [store_useCommonStore.defaultSelectMenu];
});

const changeMenu = (path) => {
  selectedKey.value = [path];
  router.push({ path });
};

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
        <a-menu mode="inline" style="height: 100%" v-model:selectedKeys="selectedKey">
          <div v-for="route in store_useCommonStore.menu" :key="route.path">
            <a-sub-menu v-if="route.children" :title="route.label" :key="route.children[0].path" @click="changeMenu(route.children[0].path)">
              <a-menu-item v-for="item in route.children" :key="item.path" :title="item.label" @click.stop="changeMenu(item.path)">{{ item.label }}</a-menu-item>
            </a-sub-menu>
            <a-menu-item v-else :title="route.label" :key="route.path" @click="changeMenu(route.path)">{{ route.label }}</a-menu-item>
          </div>  
        </a-menu>
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
