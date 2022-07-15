<template>
  <div>
    <router-view></router-view>
    <van-tabbar route class='TabBar' active-color="rgb(33, 185, 122)">
      <van-tabbar-item replace to="/home" icon="wap-home-o">
      首页</van-tabbar-item>
      <van-tabbar-item  replace to="/home/list"
        >
        <template #icon>
       <span class="iconfont icon-chazhao"></span>
      </template>
        找房</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" replace to="/home/news"
        >
        <template #icon>
       <span class="iconfont icon-zixun"></span>
      </template>
        资讯</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" replace to="/home/profiles"
        >
        <template #icon>
       <span class="iconfont icon-geren"></span>
      </template>
        我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  components: {},
  mounted () {},
  computed: {},
  methods: {}
}
</script>
<style scoped lang='less'>
.TabBar{
  .iconfont {
    font-size:22px;
  }
}
</style>
