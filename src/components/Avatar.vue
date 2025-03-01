<template>
  <div class="avatar">
    <img class="image" :src="logoImage" alt="logo"/>
  </div>
</template>

<script lang="ts" setup>
import logoImage from  '../assets/images/logo.png';

</script>

<style lang="scss" scoped>
.avatar {
  border: 1px solid rgba(255, 255, 255, 0.75);
  height: 120px;
  width: 120px;
  margin: 2rem;
  z-index: 100;
  border-radius: 50%;
  overflow: hidden;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
