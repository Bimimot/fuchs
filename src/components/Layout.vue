

<template>
  <div class="wrapper">
    <slot />
  </div>
  
  <BackgroundImage :src="BackgroundSrc" is-shadow/>
</template>

<script lang="ts" setup>
import BackgroundImage from './BackgroundImage.vue';
import BackgroundSrc from '../assets/images/bg.jpg';
</script>

<style lang="scss" scoped>
.wrapepr {
  padding: 3rem 2rem;
}


</style>
