<template>
  <div>
  <NavBar :title="title"></NavBar>
  <!-- 列表部分 -->
  <van-index-bar
  :index-list="indexList"
  :sticky-offset-top='60'
  :z-index='0'
  highlight-color='#21b97a'>
 <div v-for='(item,index) in indexList' :key="index" >
   <van-index-anchor :index="index">{{getTitle(item)}}</van-index-anchor>
  <van-cell clickable center :title="item1.label" v-for="(item1,index1) in CityList[index]" :key='index1'/>
 </div>

  </van-index-bar>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { cityList, hotCityList } from '@/api/area'
import { resolveIndex, resolveData } from './resolveDate'
export default {
  data () {
    return {
      title: '城市列表',
      indexList: [],
      CityList: []

    }
  },
  components: {
    NavBar
  },
  async created () {
    const res = await cityList(1)
    const res1 = await hotCityList()
    // console.log(res.data.body)
    this.indexList = resolveIndex(res.data.body)
    // console.log(res1)
    this.CityList = [[{ label: '北京' }], res1.data.body, ...resolveData(this.indexList, res.data.body)]
    this.indexList = ['#', '热', ...this.indexList]
    console.log(this.CityList)
    console.log(this.indexList)
  },
  methods: {
    getTitle (item) {
      if (item === '#') return '当前城市'
      if (item === '热') return '热门城市'
      return item
    }
  }
}
</script>
<style scoped lang='less'>
:deep(.van-index-bar__sidebar){
  right: -3px;
  margin-top: 15px;
  height: 580px;
  justify-content: space-around;
}
:deep(.van-cell){
   padding: 0 15px;
    height: 50px;
    font-size: 16px;
}
:deep(.van-index-anchor){
  font-size: 14px;
    // padding: 10px 15px;
    color: #999;
    height: 36px;
}
</style>
