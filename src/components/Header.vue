<template>
  <div class="menu">
    <ul class="list">
        <li class="option">Intro</li>
        <li class="option">Work</li>
        <li class="option">About</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu {
    position: relative;

}

.list {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.75);
    border-radius: 4px;
    .option {
        padding: .5rem 1rem;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.75);
        border-right: 1px solid rgba(255, 255, 255, 0.75);
        font-family: RobotoCondensed, sans-serif;
        letter-spacing: .12rem;
        transition: all .3s ease;

        &:hover {
            cursor: pointer;
            background-color: rgba(255, 255, 255, 0.25);
            color: #ffffff;
        }
    }

    .option:not(:last-child) {
        border-right: 1px solid #ffffff;
    }
}
</style>
