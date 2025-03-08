<template>
  <div class="description" :class="{ mounted: isMounted }">
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
  }, 500);
});
</script>

<style lang="scss" scoped>
.description {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  margin: 4rem auto;
  max-height: 0;
  height: auto;
  color: var(--title-color);
  border-top: 1px solid var(--title-color);
  border-bottom: 1px solid var(--title-color);
  overflow: hidden;
  opacity: 1;
  transition:
      max-height 1s ease,
      padding 1s ease;
  transition-delay: .5s;
  

  &.mounted {
    padding: 3rem 2rem;
    max-height: 40rem;
    overflow: visible;

    .text {
      opacity: 1;
    }
  }

  .text {
    letter-spacing: .15rem;
    font-size: 1.125rem;
    line-height: 2rem;
    padding: 0;
    margin: 0;
    opacity: 0;
    transition: opacity .2s 1.2s ease;
  }
}
</style>
