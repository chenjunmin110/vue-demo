<template>
  <div>
    头部
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
  name: 'home-header',
  computed: {
    ...mapState({
      total: state => state.home.total
    })
  },
  created () {
    this.$store.dispatch('home/getTotalAction')
  }
}
</script>
<style>

</style>
