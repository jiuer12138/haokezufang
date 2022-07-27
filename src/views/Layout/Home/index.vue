<template>
  <div>
    <!-- 头部搜索框 -->
    <van-search
      class="van-search-container"
      placeholder="请输入小区或地址"
      show-action
    >
      <template #label>
        <span @click="goCityList">{{ city }}</span
        ><i>▼</i>
      </template>
      <template #action>
        <div class="roundBorder">
          <span class="iconfont icon-ditu1"></span>
        </div>
      </template>
    </van-search>
    <!-- 轮播图部分 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 中间导航部分 -->
    <van-grid class="navBanner" :border="false" clickable>
      <van-grid-item text="整租" @click="$router.push('/home/list')">
        <template #icon>
          <i class="iconfont icon-home"></i>
        </template>
      </van-grid-item>
      <van-grid-item text="合租" @click="$router.push('/home/list')">
        <template #icon>
          <i class="iconfont icon-duoren"></i>
        </template>
      </van-grid-item>
      <van-grid-item text="地图找房">
        <template #icon>
          <i class="iconfont icon-ditu"></i>
        </template>
      </van-grid-item>
      <van-grid-item text="去出租" @click="$router.push('/rent/add')">
        <template #icon>
          <i class="iconfont icon-zufang"></i>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 租房小组部分 -->
    <div class="group">
      <van-cell title="租房小组" value="更多" />
      <van-grid :column-num="2" gutter="10px">
        <van-grid-item v-for="item in groupList" :key="item.id">
          <img :src="groupImg(item)" alt="" />
          <div class="fontBox">
            <div>{{ item.title }}</div>
            <div>{{ item.desc }}</div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
import { getHomeSwipe, getRentGroup } from '@/api/home'
import { getCity } from '@/utils/auth'
export default {
  data () {
    return {
      city: '北京',
      cityId: '',
      images: [],
      groupList: []
    }
  },
  components: {},
  created () {
    this.city =
      getCity()?.label ??
      { label: '北京', value: 'AREA|88cff55c-aaa4-e2e0' }.label
    this.cityId =
      getCity()?.value ??
      { label: '北京', value: 'AREA|88cff55c-aaa4-e2e0' }.value
    this.getHomeSwipe()
    this.getRentGroup()
  },
  computed: {
    groupImg () {
      const baseUrl = 'http://liufusong.top:8080'
      return (item) => baseUrl + item.imgSrc
    }
  },
  methods: {
    goCityList () {
      this.$router.push('/city')
    },
    async getHomeSwipe () {
      try {
        const res = await getHomeSwipe()
        const baseUrl = 'http://liufusong.top:8080'
        // console.log(res.data.body)
        res.data.body.forEach((item) => {
          this.images.push(baseUrl + item.imgSrc)
        })
        console.log(this.images)
      } catch (error) {}
    },
    async getRentGroup () {
      try {
        const res = await getRentGroup(this.cityId)
        console.log(res)
        this.groupList = res.data.body
        console.log(this.groupList)
      } catch (error) {}
    }
  }
}
</script>
<style scoped lang="less">
.van-search {
  background-color: rgba(255, 255, 255, 0);
  padding: 8px 10px;
  margin-top: 20px;
  margin-left: 8px;
  :deep(.van-field__control) {
    padding-left: 4px;
    font-size: 13px;
    color: #9c9fa1;
  }
  .roundBorder {
    width: 25px;
    height: 25px;
    border: 3px solid #fff;
    border-radius: 50%;
  }
  .van-search__action {
    padding: 0px 4px;
    line-height: 0.70667rem;
  }
  .icon-ditu1 {
    margin-left: 2px;
    font-size: 20px;
    color: #fff;
  }
}
.van-swipe {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  height: 212px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
.navBanner {
  margin-top: 3.73333rem;
  i {
    display: block;
    width: 60px;
    height: 60px;
    font-size: 35px;
    border-radius: 50%;
    text-align: center;
    line-height: 60px;
    color: rgb(33, 185, 122);
    background-color: #f2fbf7;
  }
  :deep(.van-grid-item__content) {
    padding: 0.22667rem 0.21333rem 20px;
  }
  :deep(.van-grid-item__text) {
    font-size: 14px;
    margin-top: 15px;
  }
}
.group {
  background-color: #f6f5f6;
  height: 187px;
  .van-cell {
    padding: 0;
    background-color: rgba(255, 255, 255, 0);
  }
  .van-cell__title {
    margin: 13px 0 13px 10px;
    font-size: 15px;
    font-weight: 700;
  }
  .van-cell__value {
    line-height: 50px;
  }
  :deep(.van-grid-item) {
    padding: 0;
  }
  :deep(.van-grid-item__content) {
    flex-direction: row;
    padding: 0 0 10px;
    width: 172.5px;
  }
  :deep(.van-grid-item__content--center) {
    justify-content: flex-start;
  }
  img {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
  .fontBox {
    font-size: 14px;
  }
}
</style>
