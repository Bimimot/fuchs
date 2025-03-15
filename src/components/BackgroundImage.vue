<template>
  <img
    class="container image"
    :src="src"
    @load="onLoad"
    :class="{ loaded: isLoaded, blur: isPopup }"
    alt="background"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoutes } from 'state/routes.store';
import { computed } from 'vue';

interface Props {
  src: string;
  isShadow?: boolean;
}

defineProps<Props>();

const routesStore = useRoutes();

const isLoaded = ref(false);
const isPopup = computed(() => routesStore.activeRouteId);

const onLoad = () => { isLoaded.value = true };
</script>

<style scoped>
.container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;

  &.image {
    object-fit: cover;
    object-position: center;
    transition:
      opacity 1s ease-in-out,
      filter 0.3s ease,
      transform 0.5s ease;
    filter: none;
    opacity: 0;
    z-index: 5;
    transform: scale(1.1);

    &.loaded {
      opacity: 1;
    }

    &.blur {
      filter: var(--overlay-filter);
      transform: none;
    }
  }
}
</style>
