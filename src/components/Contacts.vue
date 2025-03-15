<template>
  <ContentContainer class="contacts">
    <div v-for="c in contactsData" class="item">
      <component :is="c.icon" class="icon" />
      <span class="text">{{ c.value }} </span>
    </div>
  </ContentContainer>
</template>

<script lang="ts" setup>
import { contactsData } from 'constants/contacts';
import ContentContainer from './ContentContainer.vue';
</script>

<style lang="scss" scoped>
@use '../styles/breakpoints.scss' as *;

.contacts {
  flex-direction: row;
  column-gap: 2rem;  
  row-gap: .5rem;  
  padding: 1rem 2rem;
  margin: auto 0 0 0;
  flex-wrap: wrap;
  z-index: 9999;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    color: var(--title-color);
    flex-wrap: nowrap;
    transition: color .3s ease;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.15rem;
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

  @include medium {
    padding: 1rem 1.5rem;
  }

  @include small {
    padding: 1rem;
    justify-content: flex-start;
  }
}
</style>
