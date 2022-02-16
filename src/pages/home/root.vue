<template>
<div class="page" id="home">
  <home-header></home-header>
  <home-menu></home-menu>
  <app-header></app-header>
  <h1>首页</h1>
  <app-scroll>
    <h1 v-for="i in 50" :key="i">{{i}}</h1>
  </app-scroll>
</div>
</template>
<script>
import HomeHeader from './children/home-header'
import HomeMenu from './children/home-menu'
export default {
  components: {
    [HomeHeader.name]: HomeHeader,
    [HomeMenu.name]: HomeMenu
  }
}
</script>
<style>

</style>
