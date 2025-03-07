<template>
  <div class="description">
    <p>Aliquam erat volutpat. Praesent urna nisi.</p>
    <p>Aliquam nisi.</p>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.description {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  margin: 4rem auto;
  color: var(--title-color);
  border-top: 1px solid var(--title-color);
  border-bottom: 1px solid var(--title-color);

  &:after,
  &:before {
    position: absolute;
    content: '';
    width: .5px;
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
}
</style>
