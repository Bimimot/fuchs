<template>
  <Transition name="fade">
    <Intro v-if="isShow"/>
  </Transition>
  <BackgroundImage :src="backgroundSrc" is-shadow />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BackgroundImage from './BackgroundImage.vue';
import backgroundSrc from '../assets/images/bg.jpg';
import Intro from './Intro.vue';

const isShow = ref(false);

onMounted(() => {
  setTimeout(() => {
    isShow.value = true;
  }, 500);
});
</script>