<template>
  <button class="big-btn">
    <span class="big-btn__circle">
      <img src="@/assets/img/for-buttons/arrow-down-btn.svg" alt="">
    </span>
    <slot class="slot"></slot>
  </button>
</template>

<script>
export default {
  name: 'big-button'
}
</script>

<style lang="scss" scoped>
  .big-btn {
    display: flex;
    align-items: center;
    color: #2D2D2F;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    &:hover {
      text-decoration: underline;
    }
    &__circle {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      width: 84px;
      height: 84px;
      background-color: rgba(250, 189, 13, 0.5);
      border-radius: 50px;
    }
  }
  @media screen and (max-width: 450px) {
    .big-btn {
      font-size: 24px;
      &__circle {
        width: 52px;
        height: 52px;
        img {width: 24px;}
      }
    }
  }
</style>