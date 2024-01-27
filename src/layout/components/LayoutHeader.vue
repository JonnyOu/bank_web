<script setup>
const router = useRouter();
const { t } = useI18n();

const props = defineProps({
  menuIndex: {
    type: String,
    default: 'index'
  }
})

const selectedMenuKey = ref([props.menuIndex]);
const menuHead = [
  {
    key: 'index',
    name: t('system.menu.index'),
    path: '/index',
  },
  {
    key: 'accQuery',
    name: t('system.menu.accQuery'),
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

const changeRoute = (item) => {
  router.push({ path: item.path });
  selectedMenuKey.value[0] = item.key;
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
        <a-menu-item v-for="item in menuHead" :key="item.key" @click="changeRoute(item)">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-layout-header>
</template>

<style scoped>

</style>
