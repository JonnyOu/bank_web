<script setup>
const store_useSelfBankOnLocalStore = useSelfBankOnLocalStore();
const { title, test } = store_useSelfBankOnLocalStore;

const getData = async () => {
  const res = await test();
  console.log('res', res);
};

</script>

<template>
  <div>
    本行转账
    <br>
    <div class="text-6xl text-blue-600/100">tailwindcss test</div>
    <div>{{ store_useSelfBankOnLocalStore.info }}</div>
    <div>{{ title }}</div>
    <a-button type="primary" @click="getData()" class="text-[#000]">请求</a-button>
  </div>
</template>

<style scoped>

</style>
