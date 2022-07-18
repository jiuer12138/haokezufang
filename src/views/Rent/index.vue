<template>
  <div>
<NavBar :title="NavTitle"></NavBar>
<VanCell v-for="(item,index) in rentList" :key=index :obj=item></VanCell>
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
  computed: {

  },
  methods: {
    async rent () {
      try {
        const res = await rentList()
        console.log(res)
        this.rentList = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>

</style>
