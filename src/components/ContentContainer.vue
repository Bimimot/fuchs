<template>
    <div class="content-container">
      <slot />
    </div>
</template>

<style lang="scss" scoped>
.content-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  border-radius: 4px;
  backdrop-filter: var(--overlay-filter);
  background-color: var(--overlay-color);
  width: 100%;
}
</style>
