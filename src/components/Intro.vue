<template>
  <ContentContainer class="intro" :class="{ hidden: isPopup }">
    <Logo />
    <Description />
    <Menu />
  </ContentContainer>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoutes } from '../state/routes.store';
import ContentContainer from './ContentContainer.vue';
import Logo from './Logo.vue';
import Description from './Description.vue';
import Menu from './Menu.vue';

const routesStore = useRoutes();
const isPopup = computed(() => routesStore.activeRouteId);
</script>

<style lang="scss">
@use '../styles/breakpoints.scss' as *;

.intro {
  flex-direction: column;
  padding: 3rem 2rem;
  width: 100%;
  
  &.hidden {
    transform: scale(0.9);
    filter: blur(0.1rem);
    opacity: 0;
  }

  @include small {
    padding: 1.5rem 1rem;
  }
}
</style>
