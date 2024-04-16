<script setup>
const store_usePhoneServiceStore = usePhoneServiceStore();
const { getUserPhone } = store_usePhoneServiceStore;

const phone = ref('');

const getPhone = async () => {
  const res = await getUserPhone();
  phone.value = res.data.phone;
};
getPhone();

</script>

<template>
  <div>
    电子渠道手机号服务 <br>
    用户手机号：{{ phone }}
  </div>  
</template>

<style scoped>

</style>
