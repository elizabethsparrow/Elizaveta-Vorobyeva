<template>
  <button class="middle-btn">
    <slot></slot>
    <span class="middle-btn__circle">
      <img src="@/assets/img/arrow-down-btn.svg" alt="">
    </span>
  </button>
</template>

<script>
export default {
  name: 'middle-button'
}
</script>

<style lang="scss" scoped>
  .middle-btn {
    display: flex;
    align-items: center;
    color: #2D2D2F;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    &:hover {
      text-decoration: underline;
    }
    &__circle {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 16px;
      width: 52px;
      height: 52px;
      background-color: rgba(253, 30, 74, 0.75);
      border-radius: 50px;
    }
  }
</style>