<script setup>
import { routerKey } from 'vue-router';
const { t } = useI18n();

const selectedMenuKey = ref(['accQuery']);
const menuHead = [
  {
    key: 'accQuery',
    name: t('system.menu.accInfo'),
    path: '/accQuery',
  },
  {
    key: 'transfer',
    name: t('system.menu.transfer'),
    path: '/transfer'
  },
  {
    key: 'settings',
    name: t('system.menu.settings'),
    path: '/settings'
  },
]

const changeRoute = (path) => {
  router.push();
}
</script>

<template>
  <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedMenuKey"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1" v-for="item in menuHead" :key="item.key" @click="changeRoute(item.path)">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-layout-header>
</template>

<style scoped>

</style>
