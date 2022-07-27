<template>
  <div>
    <form>
      <van-search
        v-model="value"
        show-action
        background="#f6f5f6"
        placeholder="请输入小区或地址"
        @input="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-cell-group v-show="value.length > 0">
      <van-cell
        :title="item.communityName"
        v-for="item in resultList"
        :key="item.community"
        @click="selectCommunity(item)"
      />
    </van-cell-group>
  </div>
</template>
<script>
import { communitySearch } from '@/api/area'
export default {
  data () {
    return {
      value: '',
      resultList: []
    }
  },
  components: {},
  mounted () {},
  computed: {},
  methods: {
    onSearch (val) {
      console.log(val)
      this.communitySearch()
      this.resultList = []
    },
    onCancel () {
      this.$router.back()
    },
    async communitySearch () {
      try {
        const id = this.$store.state.city.value
        console.log(this.value, id)
        const res = await communitySearch(this.value, id)
        console.log(res)
        this.resultList = res.data.body
      } catch (error) {}
    },
    selectCommunity (obj) {
      this.$router.push({
        name: 'add',
        params: obj
      })
    }
  }
}
</script>
<style scoped></style>
