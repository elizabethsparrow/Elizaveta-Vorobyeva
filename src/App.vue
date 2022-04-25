<template>
  <div class="wrapper">
    <navigation-menu></navigation-menu>
    <div class="container">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <p>blah blah blah</p>
      <big-button>Заказать услугу</big-button>
      <middle-button>Узнать больше</middle-button>
      <small-button>Смотреть больше</small-button>
    </div>
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue'
export default {
  components: {NavigationMenu},
  setup() {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>