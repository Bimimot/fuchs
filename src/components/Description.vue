<template>
  <div class="description">
    <p class="text">Для работы, для учёбы, для будущего</p>
    <p class="text">Интересно и эффективно</p>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
const isMounted = ref(false);

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true;
  }, 50);
});
</script>

<style lang="scss" scoped>
@use '../styles/breakpoints.scss' as *;

@keyframes height-grow {
  0% {
    max-height: 0;
    color: transparent;
  }

  100% {
    max-height: 20rem;
    color: var(--title-color);
  }
}

.description {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem auto;
  height: auto;
  border-top: 1px solid var(--title-color);
  border-bottom: 1px solid var(--title-color);
  overflow: hidden;
  width: 100%;

  max-height: 0;
  padding: 0rem 2rem;
  color: transparent;
  padding: 0 2rem;
  animation: height-grow 1s .8s ease-out forwards;

  .text {
    letter-spacing: .15rem;
    font-size: 1.125rem;
    line-height: 160%;
    padding: 0;
    margin: 0;
    text-align: center;
    &:first-child {
      padding-top: 2.5rem;
    }
    &:last-child {
      padding-bottom: 2.5rem;
    }
  }

  @include medium {
    margin: 2.5rem auto;
    .text {
      font-size: 1rem;
      letter-spacing: .1rem;
      &:first-child {
      padding-top: 1.5rem;
    }
    &:last-child {
      padding-bottom: 1.5rem;
    }
    }
  }

  @include small {
    margin: 1.5rem auto;

    .text {
      font-size: .75rem;
    }
  }
}
</style>
