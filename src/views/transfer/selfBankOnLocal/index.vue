<script setup>
const store_useSelfBankOnLocalStore = useSelfBankOnLocalStore();
</script>

<template>
  <div>
    本行转账
    <br>
    <div class="text-6xl text-blue-600/100">tailwindcss test</div>
    <div>{{ store_useSelfBankOnLocalStore.info }}</div>
  </div>  
</template>

<style scoped>

</style>
