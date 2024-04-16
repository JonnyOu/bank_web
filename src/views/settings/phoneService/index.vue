<script setup>
const store_usePhoneServiceStore = usePhoneServiceStore();
const { getUserPhone } = store_usePhoneServiceStore;

const phone = ref('');

const getPhone = async () => {
  const res = await getUserPhone();
  phone.value = res.data.phone;
};

</script>

<template>
  <div>
    电子渠道手机号服务 <br>
    用户手机号：{{ phone }}
    <div>
      <a-button type="primary" @click="getPhone">获取手机号码</a-button>
    </div>
  </div>  
</template>

<style scoped>

</style>
