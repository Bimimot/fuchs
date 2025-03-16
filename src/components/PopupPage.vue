<template>
  <Teleport to="body">
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
        <div class="page-header">
          <h2 class="page-title">{{ r.popupTitle }}</h2>
          <div class="close" @click.stop="routesStore.resetActiveRouteId">
            <CloseIcon />
          </div>
        </div>
        <div class="page-content">
          <component :is="r.component" />
          <Contacts />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { routes } from '../constants/routes';
import { useRoutes } from '../state/routes.store';
import CloseIcon from '../assets/icons/close.svg';
import Contacts from './Contacts.vue';

const routesStore = useRoutes();
</script>

<style lang="scss" scoped>
@use '../styles/breakpoints.scss' as *;

@keyframes popup {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.overflow {
  position: fixed;
  inset: 0;
  z-index: 200;
}

.popup {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--popup-background);
  padding: 2rem 0 1.5rem;
  margin: 0 auto 0;
  width: inherit;
  max-width: 46rem;
  height: 100vh;
  border-radius: 4px;
  opacity: 0;
  animation: popup 0.4s ease 0.2s forwards;

  .close {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
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

  .page-header {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 0.5rem 0.5rem 2.5rem;
  }

  .page-title {
    vertical-align: baseline;
    color: var(--title-color);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
    line-height: 1.4;
    letter-spacing: 0.5rem;
    border-bottom: solid 1px var(--title-color);
    width: max-content;
    margin: 0;
  }

  .page-content {
    position: relative;
    flex-direction: column;
    display: flex;
    flex-grow: 1;
    padding: 0 2.5rem;
    overflow-y: auto;
    scrollbar-color: var(--text-color) transparent;
    scrollbar-width: thin;
  }

  @include medium {
    transform: translateY(0) !important;
    padding: 1rem 0;
    overflow-y: auto;
    .page-header {
      padding: 0 0.25rem 0.5rem 1rem;
    }
    .page-content {
      padding: 0 1rem;
    }
  }
}
</style>
