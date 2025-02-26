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
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 4px;
  .option {
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.75);
    border-right: 1px solid rgba(255, 255, 255, 0.75);
    font-family: RobotoCondensed, sans-serif;
    letter-spacing: 0.12rem;
    transition: all 0.3s ease;

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.25);
      color: #ffffff;
    }
  }

  .option:not(:last-child) {
    border-right: 1px solid #ffffff;
  }
}
</style>
