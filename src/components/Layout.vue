<template>
  <div class="content-wrapper">
    <TransitionGroup name="fade">
      <Intro v-if="isShow" :class="{ hidden: isPopup }"/>
      <Contacts v-if="isShow" :class="{ hidden: isPopup }"/>
    </TransitionGroup>
  </div>
  <BackgroundImage :src="backgroundSrc" is-shadow />
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from 'vue';
import { useRoutes } from '../state/routes.store';
import BackgroundImage from './BackgroundImage.vue';
import backgroundSrc from '../assets/images/bg.jpg';
import Intro from './Intro.vue';
import Contacts from './Contacts.vue';

const isShow = ref(false);

const routesStore = useRoutes();
const isPopup = computed(() => routesStore.activeRouteId);

onMounted(() => {
  setTimeout(() => {
    isShow.value = true;
  }, 1500);
});
</script>

<style lang="scss" scoped>
@use '../styles/breakpoints.scss' as *;

.content-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin: 2rem 1rem;
  width: auto;
}

.hidden {
    transform: scale(0.9);
    filter: blur(0.1rem);
    opacity: 0;
  }
</style>
