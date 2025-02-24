<template>
  <div class="wrapper">
    <Avatar />
    <Header />
    <slot />
  </div>

  <BackgroundImage :src="BackgroundSrc" is-shadow />
</template>

<script lang="ts" setup>
import BackgroundImage from './BackgroundImage.vue';
import BackgroundSrc from '../assets/images/bg.jpg';
import Avatar from './Avatar.vue';
import Header from './Header.vue';
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  z-index: 100;
}
</style>
