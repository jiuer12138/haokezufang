<template>
  <div>
    <NavBar :title="NavTitle"></NavBar>
    <div
      @click="godetail(item.houseCode)"
      v-for="(item, index) in rentList"
      :key="index"
    >
      <VanCell :obj="item"></VanCell>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import VanCell from '@/components/VanCell.vue'
import { rentList } from '@/api/user'
export default {
  data () {
    return {
      NavTitle: '房屋管理',
      rentList: []
    }
  },
  components: {
    NavBar,
    VanCell
  },
  created () {
    this.rent()
  },
  computed: {},
  methods: {
    async rent () {
      try {
        const res = await rentList()
        console.log(res)
        this.rentList = res.data.body
      } catch (error) {
        console.log(error)
      }
    },
    godetail (id) {
      console.log(1)
      console.log(id)
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>
<style scoped></style>
