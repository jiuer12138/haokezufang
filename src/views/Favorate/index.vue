<template>
  <div>
<NavBar :title="NavTitle"></NavBar>
<VanCell v-for="(item,index) in favoList" :key=index :obj=item></VanCell>
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
  computed: {

  },
  methods: {
    async favorate () {
      try {
        const res = await favorateList()
        console.log(res)
        this.favoList = res.data.body
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>

</style>
