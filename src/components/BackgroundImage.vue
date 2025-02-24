<template>
  <img
    class="container image"
    :src="src"
    @load="onLoad"
    :class="{loaded: isLoaded}"
    alt="background"
  />
  <div
    v-if="isShadow && isLoaded"
    class="container shadow"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  src: string;
  isShadow?: boolean;
}

defineProps<Props>();
const isLoaded = ref(false);

const onLoad = () => {
  isLoaded.value = true;
};
</script>

<style scoped>
.container {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  

  &.image {
    object-fit: cover;
    object-position: center;
    transition: opacity 2.5s ease-in-out;
    transition-delay: .75s;
    opacity: 0;
    z-index: 5;

    &.loaded {
        opacity: 1;
    }
  }

  &.shadow {
    background-image: linear-gradient(
      to top,
      rgba(19, 21, 25, 0.5),
      rgba(19, 21, 25, 0.5)
    );
    background-size:
      auto,
      256px 256px;
    background-position: center, center;
    background-repeat: no-repeat, repeat;
    z-index: 10;
  }
}
</style>
