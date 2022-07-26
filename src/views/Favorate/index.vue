<template>
  <div>
    <NavBar :title="NavTitle"></NavBar>
     <div
      @click="godetail(item.houseCode)"
      v-for="(item, index) in favoList"
      :key="index"
    >
      <VanCell :obj="item"></VanCell>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import VanCell from '@/components/VanCell.vue'
import { favorateList } from '@/api/user'
export default {
  data () {
    return {
      NavTitle: '收藏列表',
      favoList: []
    }
  },
  components: {
    NavBar,
    VanCell
  },
  created () {
    this.favorate()
  },
  computed: {},
  methods: {
    async favorate () {
      try {
        const res = await favorateList()
        console.log(res)
        this.favoList = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    godetail (id) {
      console.log(id)
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
<style scoped></style>
