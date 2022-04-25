<template>
  <div class="container">
    <nav class="navigation-menu">
      <a href="" class="logo">
        <img src="" alt="" class="logo">
      </a>
      <ul class="navigation-menu-list">
        <li class="navigation-menu-item"><a href="#" class="navigation-menu-item__li">Портфолио</a></li>
        <li class="navigation-menu-item"><a href="#" class="navigation-menu-item__li">Услуги</a></li>
        <li class="navigation-menu-item"><a href="#" class="navigation-menu-item__li">Контакты</a></li>
        <li class="navigation-menu-item"><a href="#" class="navigation-menu-item__li">Обо мне</a></li>
      </ul>
      <div class="_mobile-visible">
        <span></span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'navigation-menu',
  setup() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-menu {
  color: #2D2D2F;
  &-list {
    display: flex;
  }
  &-item {
    margin-right: 12px;
    font-size: 24px;
    font-weight: 300;
    line-height: 30px;
    &:last-child {margin-right: 0;}
  }
}
</style>