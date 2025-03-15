<template>
  <ContentContainer class="intro">
    <Logo />
    <Description />
    <Menu />
  </ContentContainer>
</template>

<script lang="ts" setup>
import ContentContainer from './ContentContainer.vue';
import Logo from './Logo.vue';
import Description from './Description.vue';
import Menu from './Menu.vue';
</script>

<style lang="scss">
@use '../styles/breakpoints.scss' as *;

.intro {
  flex-direction: column;
  padding: 3rem 2rem;
  width: 100%;

  @include small {
    padding: 1.5rem 1rem;
  }
}
</style>
