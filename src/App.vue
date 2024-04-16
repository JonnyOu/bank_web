<script setup>
import Index from './layout/index.vue';

</script>

<template>
  <a-config-provider :theme="{
      token: {
        colorPrimary: '#00b96b',
      },
    }">
    <router-view></router-view>
  </a-config-provider>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {

  :deep(.ant-form-item-label > label) {
    color: #fff;
  }
  :deep(.ant-btn > span) {
    color: #fff;
  }
  :deep(.ant-form label) {
    color: #fff;
  }
  :deep(.ant-form-item) {
    color: #fff;
  }
}
</style>
