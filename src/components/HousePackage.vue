<template>
  <van-grid :column-num="5" :border="false">
    <van-grid-item
      v-for="(item, index) in list"
      :key="index"
      :text="item"
      @click="selectItem(item)"
      :class="{ active: isActiveList.includes(item) }"
    >
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
      },
      isActiveList: []
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    rentList: {
      type: Array,
      default: () => []
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
  methods: {
    selectItem (item) {
      if (this.rentList.length === 0) return
      if (this.isActiveList.includes(item)) {
        this.isActiveList = this.isActiveList.filter((ele) => ele !== item)
      } else {
        this.isActiveList.push(item)
      }
      console.log(this.isActiveList)
      this.$emit('getSupportings', this.isActiveList)
    }
  }
}
</script>
<style scoped lang="less">
.van-grid {
  background-color: #fff;
  padding: 0 10px 0;
  .van-grid-item {
    height: 71px;
    padding: 10px 0;
    :deep(.van-grid-item__text) {
      font-size: 15px;
    }
  }
  :deep(.van-grid-item__text) {
    color: unset;
  }
  .active {
    color: #21b97a;
  }
  i {
    font-size: 23px;
  }
}
</style>
