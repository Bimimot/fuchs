<template>
  <div class="menu">
    <ul class="list">
      <li
        v-for="route in routes"
        class="option"
        :key="route.id"
        @click="() => setActiveRouteId(route.id)"
      >
        {{ route.headerTitle }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { routes } from '../constants/routes';
import { useRoutes } from '../state/routes.store';

const { setActiveRouteId } = useRoutes();
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
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
    font-size: .75rem;
    letter-spacing: .25rem;
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
