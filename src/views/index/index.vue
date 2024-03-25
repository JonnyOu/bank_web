<script setup>
const store_useSelfBankOnLocalStore = useSelfBankOnLocalStore();
const { test } = store_useSelfBankOnLocalStore;

const getData = async () => {
  const res = await test();
  console.log('res', res);
};
getData();

</script>

<template>
  <div>
    <a-layout>
      <LayoutHeader menuIndex="index" />
      首页
    </a-layout>
  </div>  
</template>

<style scoped>

</style>
