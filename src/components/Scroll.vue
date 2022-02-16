<template>
  <div id="scroll-wrapper" ref="scroll">
    <div class="scroll">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import Scroll from 'better-scroll'
export default{
  name: 'app-scroll',
  mounted () {
    Scroll(this.$refs.scroll)
  }
}
</script>
<style>
#scroll-wrapper{
  overflow: hidden;
}
</style>
