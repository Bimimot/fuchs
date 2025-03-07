<template>
  <div class="intro" :class="{ hidden: isPopup }">
    <Logo />
    <Description />
    <Menu />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoutes } from '../state/routes.store';
import Logo from './Logo.vue';
import Description from './Description.vue';
import Menu from './Menu.vue';

const routesStore = useRoutes();
const isPopup = computed(() => routesStore.activeRouteId);
</script>

<style lang="scss">
.intro {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  z-index: 100;
  border-radius: 4px;
  backdrop-filter: blur(.125rem);
  background-color: rgba(0, 0, 0, 0.15);
  
  &.hidden {
    transform: scale(0.9);
    filter: blur(0.1rem);
    opacity: 0;
  }
}
</style>
