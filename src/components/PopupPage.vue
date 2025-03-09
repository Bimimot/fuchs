<template>
  <Teleport to="#wrapper">
    <div
      v-show="routesStore.activeRouteId"
      class="overflow"
      @click="routesStore.resetActiveRouteId"
    >
      <div
        v-for="r in routes"
        v-show="r.id === routesStore.activeRouteId"
        class="popup"
        @click.stop="null"
      >
        <div class="close" @click.stop="routesStore.resetActiveRouteId">
          <CloseIcon />
        </div>
        <h2 class="page-title">{{ r.popupTitle }}</h2>
        <component :is="r.component" />
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { routes } from '../constants/routes';
import { useRoutes } from '../state/routes.store';
import CloseIcon from '../assets/icons/close.svg';

const routesStore = useRoutes();
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
  inset: 0;
  z-index: 999;
}
.popup {
  position: relative;
  margin: 2rem auto 0;
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
    vertical-align: baseline;
    color: var(--title-color);
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1.4;
    letter-spacing: 0.5rem;
    border-bottom: solid 1px var(--title-color);
    width: max-content;
    padding: 0 0 0.5rem;
    margin: 0;
    
  }
}
</style>
