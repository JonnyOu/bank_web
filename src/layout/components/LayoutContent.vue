<script setup>
const selectedKeys2 = ref(['1']);
const openKeys = ref(['sub1']);
</script>

<template>
  <a-layout-content style="padding: 0 50px">
    <!-- 路径 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>1</a-breadcrumb-item>
      <a-breadcrumb-item>2</a-breadcrumb-item>
      <a-breadcrumb-item>3</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 左侧菜单 -->
    <a-layout style="height: 80vh; padding: 24px 0; background: #fff">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          mode="inline"
          style="height: 100%"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <!-- <user-outlined /> -->
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <!-- <laptop-outlined /> -->
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <!-- <notification-outlined /> -->
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <!-- 展示内容 -->
      <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout-content>
</template>

<style scoped>

</style>
