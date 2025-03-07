<template>
  <Layout />
  <PopupPage />
</template>

<script lang="ts" setup>
import Layout from 'components/Layout.vue';
import PopupPage from 'components/PopupPage.vue';
</script>

<style lang="scss">
#app {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
