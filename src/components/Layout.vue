<template>
  <Transition name="fade">
    <div class="wrapper" v-if="isShow">
      <Avatar />
      <Menu />
    </div>
  </Transition>

  <BackgroundImage :src="backgroundSrc" is-shadow />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BackgroundImage from './BackgroundImage.vue';
import backgroundSrc from '../assets/images/bg.jpg';
import Avatar from './Avatar.vue';
import Menu from './Menu.vue';

const isShow = ref(false);

onMounted(() => {
  setTimeout(() => {
    isShow.value = true;
  }, 200);
});
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
