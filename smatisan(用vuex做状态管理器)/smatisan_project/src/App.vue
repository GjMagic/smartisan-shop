<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from '@/components/header-nav'
export default {
  name: 'app',
  components: {
    HeaderNav
  }
}
</script>

<style>

</style>
