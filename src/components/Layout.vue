<template>
  <Transition name="fade">
    <div class="wrapper" v-if="isShow">
      <Avatar />
      <Header />
    </div>
  </Transition>

  <BackgroundImage :src="BackgroundSrc" is-shadow />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BackgroundImage from './BackgroundImage.vue';
import BackgroundSrc from '../assets/images/bg.jpg';
import Avatar from './Avatar.vue';
import Header from './Header.vue';

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
