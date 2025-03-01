<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="route" class="overflow" @click="routesStore.resetActiveRouteId">
        <div class="popup" >
          <div class="close" @click.stop="routesStore.resetActiveRouteId">
            <CloseIcon />
          </div>
          <h2 class="page-title">{{ route.headerTitle }}</h2>
          <component :is="route.component" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { routes } from '../constants/routes';
import { useRoutes } from '../state/routes.store';
import CloseIcon from '../assets/icons/close.svg';

const routesStore = useRoutes();
const route = computed(() =>
  routes.find((r) => r.id === routesStore.activeRouteId)
);
</script>

<style lang="scss" scoped>
.overflow {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  inset: 0;
  z-index: 9999;
}
.popup {
  position: relative;
  margin: auto;
  background: var(--popup-background);
  padding: 4.5rem 2.5rem 1.5rem 2.5rem;
  position: relative;
  width: 40rem;
  max-width: 100%;
  min-height: 10rem;
  border-radius: 4px;

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: var(--text-color);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  .page-title {
    padding: 0;
    font-family: Roboto, sans-serif;
    vertical-align: baseline;
    color: var(--text-color);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1.4;
    letter-spacing: 0.5rem;
    border-bottom: solid 1px var(--text-color);
    width: max-content;
    padding-bottom: 0.5rem;
    margin: 0 0 2rem 0;
  }
}
</style>
