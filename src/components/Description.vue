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
  }, 200);
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
  opacity: 0;
  transition:
      max-height 1s ease,
      padding 1s ease,
      opacity .5s ease-in-out;
  transition-delay: .5s;
  

  &.mounted {
    padding: 3rem 2rem;
    max-height: 40rem;
    opacity: 1;
    overflow: visible;
  }

  &:after,
  &:before {
    position: absolute;
    content: '';
    width: 0.5px;
    height: 4.05rem;
    background-color: var(--text-color);
    left: 50%;
  }

  &:before {
    top: -4.05rem;
  }

  &:after {
    bottom: -4.05rem;
  }

  .text {
    letter-spacing: .15rem;
    font-size: 1.125rem;
    line-height: 2rem;
    padding: 0;
    margin: 0;
  }
}
</style>
