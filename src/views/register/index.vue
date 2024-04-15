/*
 * @Author: JonnyOu 
 * @Date: 2024-04-11 17:59:29 
 * @Last Modified by: JonnyOu
 * @Last Modified time: 2024-04-11 19:03:16
 * @Description:  
 */
<script setup>
const store_useCommonStore = useCommonStore();

const jumpStep = (nextStep) => {
  store_useCommonStore.jumpStep(nextStep);
};

</script>
<template>
  <div>
    <RegisterIndex v-if="store_useCommonStore.step === 0" @jump="jumpStep"  /> 
    <RegisterResult v-if="store_useCommonStore.step === 1"  @jump="jumpStep"/>
  </div>
</template>

