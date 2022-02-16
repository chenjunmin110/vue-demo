<template>
  <nav class="tabs border-top">
    <li class="tab">
      <router-link to="/home">
        <span>首页</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/category">
        <span>分类</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/topic">
        <span>识物</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/cart">
        <span>购物车</span>
      </router-link>
    </li>
    <li class="tab">
      <router-link to="/mine">
        <span>我的</span>
      </router-link>
    </li>
  </nav>
</template>
<script>
export default {
  name: 'app-tabs'
}
</script>
<style lang="scss" scoped>
.tabs{
  width: 100%;
  position: absolute;
  height: 49px;
  left: 0;
  bottom: 0;
  background: #eee;
  display: flex;
  .tab{
    flex: 1;
    a{
      display: block;
      width: 100%;
      height: 100%;
      flex-direction: column;
      span{
        display: block;
        font-size: 12px;
        color: #666;
        text-align: center;
        line-height: 50px;
      }
      &.router-link-active span{
        color: #b4282d;
      }
    }
  }
}
</style>
