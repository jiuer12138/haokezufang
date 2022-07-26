<template>
  <van-grid :column-num="5" :border="false">
    <van-grid-item v-for="item in list" :key="item" :text="item">
      <template #icon>
        <i :class="iconClass(item)"></i>
      </template>
    </van-grid-item>
  </van-grid>
</template>
<script>
export default {
  data () {
    return {
      icon: {
        电视: 'icon-dianshi',
        冰箱: 'icon-bingxiang',
        洗衣机: 'icon-xiyiji',
        空调: 'icon-kongdiao',
        热水器: 'icon-reshuiqi',
        床: 'icon-shafa',
        沙发: 'icon-shafa',
        暖气: 'icon-nuanqi',
        宽带: 'icon-wifi',
        衣柜: 'icon-yigui',
        天然气: 'icon-tianranqi'
      }
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  components: {},
  mounted () {},
  computed: {
    iconClass () {
      return (item) => {
        return `iconfont ${this.icon[item]}`
      }
    }
  },
  methods: {}
}
</script>
<style scoped lang="less">
.van-grid {
  background-color: #fff;
  padding: 0 10px 0;
  .van-grid-item {
    height: 71px;
    padding: 10px 0;
      :deep(.van-grid-item__text){
        font-size:16px;
      }
  }
  i {
    font-size: 23px;
  }
}
</style>
