<template>
  <div>
    <NavBar :title="title"></NavBar>
    <!-- 列表部分 -->
    <van-list :finished="finished" finished-text="没有更多了">
      <van-index-bar
        :sticky-offset-top="50"
        :index-list="indexList"
        highlight-color="#21b97a"
      >
        <div v-for="(item, index) in indexList" :key="item">
          <van-index-anchor :index="item">{{
            getTitle(item)
          }}</van-index-anchor>
          <van-cell
            @click="chooseCity(item1)"
            center
            clickable
            :title="item1.label"
            v-for="(item1, index1) in CityList[index]"
            :key="index1"
          />
        </div>
      </van-index-bar>
    </van-list>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { cityList, hotCityList } from '@/api/area'
import { resolveIndex, resolveData } from './resolveDate'
import { setCity, getCity } from '@/utils'
export default {
  data () {
    return {
      title: '城市列表',
      indexList: [],
      CityList: [],
      finished: false,
      currentCity: [{ label: '北京' }]
    }
  },
  components: {
    NavBar
  },
  created () {
    this.getList()
    this.currentCity[0].label = getCity().label
  },
  methods: {
    getTitle (item) {
      if (item === '#') return '当前城市'
      if (item === '热') return '热门城市'
      return item
    },
    chooseCity (obj) {
      setCity(obj)
      this.currentCity[0].label = getCity().label
      this.$router.back()
    },
    async getList () {
      try {
        const res = await cityList(1)
        const res1 = await hotCityList()
        // console.log(res.data.body)
        this.indexList = resolveIndex(res.data.body)
        // console.log(res1)
        this.CityList = [
          this.currentCity,
          res1.data.body,
          ...resolveData(this.indexList, res.data.body)
        ]
        this.indexList = ['#', '热', ...this.indexList]
        // console.log(this.CityList)
        // console.log(this.indexList)
        this.finished = true
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped lang="less">
:deep(.van-index-bar__sidebar) {
  right: 0px;
  font-weight: 100;
  margin-top: 15px;
  z-index: 999;
  height: 580px;
  justify-content: space-around;
}
:deep(.van-cell) {
  padding: 0 15px;
  height: 50px;
  font-size: 16px;
}
:deep(.van-index-anchor) {
  font-size: 14px;
  // padding: 10px 15px;
  color: #999;
  height: 40px;
}
</style>
