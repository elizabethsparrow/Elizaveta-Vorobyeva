<template>
  <button class="small-btn">
    <slot></slot>
    <span class="small-btn__circle">
      <img src="@/assets/img/for-buttons/arrow-right-btn-dark.svg" alt="">
    </span>
  </button>
</template>

<script>
export default {
  name: 'small-button'
}
</script>

<style lang="scss" scoped>
  .small-btn {
    display: flex;
    align-items: center;
    color: #2D2D2F;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    &:hover {
      text-decoration: underline;
    }
    &__circle {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 16px;
      width: 42px;
      height: 42px;
      background-color: rgba(250, 189, 13, 0.75);
      border-radius: 50px;
    }
  }
</style>