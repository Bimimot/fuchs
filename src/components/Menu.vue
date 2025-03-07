<template>
  <div class="menu" :class="{ hidden: isPopup }">
    <ul class="list">
      <li
        v-for="route in routes"
        class="option"
        :key="route.id"
        @click="() => routesStore.setActiveRouteId(route.id)"
      >
        {{ route.headerTitle }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { routes } from '../constants/routes';
import { useRoutes } from '../state/routes.store';

const routesStore = useRoutes();
const isPopup = computed(() => routesStore.activeRouteId);
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  transition:
    transform 0.325s ease-in-out,
    filter 0.325s ease-in-out,
    opacity 0.325s ease-in-out;

  &.hidden {
    transform: scale(0.9);
    filter: blur(0.1rem);
    opacity: 0;
  }
}

.list {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  border: 1px solid var(--text-color);
  border-radius: 4px;
  .option {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    color: var(--text-color);
    border-right: 1px solid var(--text-color);
    font-weight: 300;
    font-size: 0.75rem;
    letter-spacing: 0.25rem;
    transition: all 0.3s ease;
    text-wrap: nowrap;

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.25);
      color: var(--title-color);
    }
  }

  .option:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
}
</style>
