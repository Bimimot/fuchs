<template>
  <div class="content-wrapper" id="wrapper">
    <TransitionGroup name="fade">
      <Intro v-if="isShow" />
      <Contacts v-if="isShow" />
    </TransitionGroup>
  </div>
  <BackgroundImage :src="backgroundSrc" is-shadow />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import BackgroundImage from './BackgroundImage.vue';
import backgroundSrc from '../assets/images/bg.jpg';
import Intro from './Intro.vue';
import Contacts from './Contacts.vue';

const isShow = ref(false);

onMounted(() => {
  setTimeout(() => {
    isShow.value = true;
  }, 1500);
});
</script>

<style lang="scss" scoped>
@use '../styles//breakpoints.scss' as *;

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 2rem 1rem;
  justify-content: space-between;
  width: auto;
}
</style>
