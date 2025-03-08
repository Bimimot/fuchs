<template>
  <ul class="contacts">
    <li v-for="c in contactsData" class="item">
      <component :is="c.icon" class="icon" />
      <span class="text">{{ c.value }} </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoutes } from '../state/routes.store';
import { contactsData } from 'constants/contacts';

const routesStore = useRoutes();
const isPopup = computed(() => routesStore.activeRouteId);
</script>

<style lang="scss" scoped>
.contacts {
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 2rem;
  margin: 0;
  z-index: 100;
  border-radius: 4px;
  backdrop-filter: blur(0.125rem);
  background-color: rgba(0, 0, 0, 0.15);
  flex-wrap: wrap;
  transition: color .3s ease-in-out;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .75rem;
    color: var(--title-color);
    flex-wrap: nowrap;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.25rem;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid;
      border-radius: 50%;
    }

    .text {
      font-weight: 500;
      font-size: 0.75rem;
      letter-spacing: 0.05rem;
    }
  }

  :hover {
    cursor: pointer;
    color: var(--accent-color);
  }
}
</style>
