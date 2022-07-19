<template>
  <div class="detail-container">
    <NavBar :title="title"></NavBar>
   <div class='basic-details'>
     <van-image
      width="100%"
      height="15%"
      src="https://img01.yzcdn.cn/vant/cat.jpeg"
    />
    <van-cell title="单元格"  label="描述信息" />
    <van-cell title="单元格"  label="描述信息" />

   </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { HouseDetail } from '@/api/house'
export default {
  data () {
    return {
      title: '小区'
    }
  },
  components: {
    NavBar
  },
  created () {
    this.HouseDetail()
  },
  computed: {},
  methods: {
    async HouseDetail () {
      try {
        const res = await HouseDetail(this.$route.params.id)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped lang='less'>
.detail-container{
  .van-image{
    margin-top: -5px;
  }
}
</style>
