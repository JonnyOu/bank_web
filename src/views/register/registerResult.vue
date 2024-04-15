/*
 * @Author: JonnyOu 
 * @Date: 2024-04-11 17:46:32 
 * @Last Modified by: JonnyOu
 * @Last Modified time: 2024-04-14 21:12:30
 * @Description:  
 */
<script setup>
const router = useRouter();
const toLogin = () => {
  
  router.push({ path: '/login' });
};
</script>
<template>
  <div>
    <div>注册成功</div>
    <a-button type="primary" @click="toLogin">去登录</a-button>
  </div>
</template>

