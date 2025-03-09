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
@keyframes height-grow {
  0% {
    max-height: 0;
    padding: 0em 2rem;
    color: transparent;
  }

  100% {
    max-height: 20rem;
    padding: 2.5rem 2rem;
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

  max-height: 0;
  padding: 0rem 2rem;
  color: transparent;
  animation: height-grow .9s .8s ease-out forwards;

  .text {
    letter-spacing: .15rem;
    font-size: 1.125rem;
    line-height: 2rem;
    padding: 0;
    margin: 0;
  }
}
</style>
