<template>
  <Teleport to="body">
    <div v-if="route" class="overflow" @click="routesStore.resetActiveRouteId">
      <div class="popup" @click.stop="null">
        <div class="close" @click.stop="routesStore.resetActiveRouteId">
          <CloseIcon />
        </div>
        <h2 class="page-title">{{ route.headerTitle }}</h2>
        <component :is="route.component" />
      </div>
    </div>
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
@keyframes popup {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: translateY(-0.5rem);
  }
}
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
  opacity: 0;
  animation: popup 0.4s ease 0.2s forwards;

  .close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
    color: var(--text-color);
    transition: background-color 0.2s ease-in-out;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 50%;

    &:hover {
      background-color: rgba(255, 255, 255, 0.075);
    }
  }

  .page-title {
    padding: 0;
    vertical-align: baseline;
    color: var(--title-color);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1.4;
    letter-spacing: 0.5rem;
    border-bottom: solid 1px var(--title-color);
    width: max-content;
    padding-bottom: 0.5rem;
    margin: 0 0 2rem 0;
  }
}
</style>
