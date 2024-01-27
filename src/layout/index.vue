<script setup>
const route = useRoute();
const menuIndex = ref(route.matched[0].meta.menuIndex);

</script>

<template>
  <a-layout>
    <LayoutHeader  :menuIndex="menuIndex" />
    <LayoutContent />
    <LayoutFooter />
  </a-layout>
</template>

<style scoped>

</style>
