<template>
  <div>
<van-nav-bar
  class='NavBar'
  title="城市列表"
  left-arrow
  @click-left="onClickLeft"
/>
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
>
<CityListItem :list='listNow' title='当前城市'></CityListItem>
<CityListItem :list='listHot' title='热门城市'></CityListItem>
<CityListItem  v-for="(item,index) in listCity" :key="index" :title="titleList[index]" :list="item"></CityListItem>
</van-list>
  </div>
</template>
<script>
import CityListItem from '@/components/CItyListItem.vue'
import { cityList, hotCityList } from '@/api/area'
import { cityCate } from './cityCate'
export default {
  data () {
    return {
      loading: '',
      finished: true,
      titleList: ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'Q', 'S', 'T', 'W', 'X', 'Y', 'Z'],
      listNow: ['北京'],
      listHot: [],
      listCity: []
    }
  },
  components: {
    CityListItem
  },
  async created () {
    const res = await cityList(1)
    console.log(res.data.body)
    this.listCity = cityCate(this.titleList, res.data.body)
    // console.log(this.listCity)
    const res1 = await hotCityList()
    console.log(res1)
    this.listHot = res1.data.body
  },
  computed: {

  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang='less'>
.NavBar{
    background-color:#21b97a;
    :deep(.van-nav-bar__title){
        color:#fff;
        font-size: 18px;
    }
    :deep(.van-icon){
         color:#fff;
    }
}
</style>
