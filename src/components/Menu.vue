<template>
  <div class="menu" >
    <ul class="list">
      <li
        v-for="option in headerOptions"
        class="option"
        :key="option.id"
        @click="() => routesStore.setActiveRouteId(option.id)"
      >
        {{ option.headerTitle }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { routes } from '../constants/routes';
import { useRoutes } from '../state/routes.store';

const routesStore = useRoutes();
const headerOptions = routes.filter(r => !!r.headerTitle);
</script>

<style lang="scss" scoped>
@use '../styles/breakpoints.scss' as *;

.menu {
  position: relative;
  transition:
    transform 0.325s ease-in-out,
    filter 0.325s ease-in-out,
    opacity 0.325s ease-in-out;
}

.list {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid var(--text-color);
  border-radius: 4px;

  .option {
    padding: 0.75rem 1rem;
    text-transform: uppercase;
    color: var(--title-color);
    font-weight: 500;
    font-size: 0.85rem;
    letter-spacing: 0.25rem;
    transition: all 0.3s ease;
    text-wrap: nowrap;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid var(--title-color);
    }

    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.25);
      color: var(--title-color);
    }
  }

  .option:not(:last-child) {
    border-right: 1px solid var(--title-color);
  }

  @include medium {
    flex-direction: column;

    .option {
      &:not(:last-child) {
        border-right: none;
        border-bottom: 1px solid var(--title-color);
    } 
    }
  }
}
</style>
