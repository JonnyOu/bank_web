/*
 * @Author: JonnyOu 
 * @Date: 2024-04-16 19:18:54 
 * @Last Modified by: JonnyOu
 * @Last Modified time: 2024-04-17 11:07:51
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
    <div>更改密码成功</div>
    <a-button type="primary" @click="toLogin">去登录</a-button>
  </div>
</template>

