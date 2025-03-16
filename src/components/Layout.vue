<template>
  <Transition name="fade">
    <div v-if="isShow" class="content-wrapper" :class="{ hidden: isPopup }">
        <Intro />
        <Contacts />
    </div>
  </Transition>
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
  }, 200);
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
  z-index: 100;

  @include small {
    margin: .5rem 1rem 2rem;
  }
}

.hidden {
  opacity: 0;
}
</style>
