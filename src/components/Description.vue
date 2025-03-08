<template>
  <div class="description">
    <p class="text">Aliquam erat volutpat. Praesent urna nisi.</p>
    <p class="text">Aliquam nisi.</p>
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
    height: auto;
    max-height: 0;
  }

  100% {
    max-height: 20rem;
  }
}

.description {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  margin: 4rem auto;
  height: auto;
  color: var(--title-color);
  border-top: 1px solid var(--title-color);
  border-bottom: 1px solid var(--title-color);
  opacity: 1;
  overflow: visible;

  .text {
    letter-spacing: .15rem;
    font-size: 1.125rem;
    line-height: 2rem;
    padding: 0;
    margin: 0;
    opacity: 1;
  }
}
</style>
