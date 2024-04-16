/*
 * @Author: JonnyOu 
 * @Date: 2024-04-16 17:43:10 
 * @Last Modified by: JonnyOu
 * @Last Modified time: 2024-04-16 17:44:32
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
    <UpdatePwdInput v-if="store_useCommonStore.step === 0" @jump="jumpStep"  /> 
    <UpdatePwdConf v-if="store_useCommonStore.step === 1" @jump="jumpStep"  /> 
    <UpdatePwdResult v-if="store_useCommonStore.step === 2" @jump="jumpStep"  /> 
  </div>
</template>

