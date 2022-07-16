<template>
  <div>
<div class='title'>{{title}}</div>
  <van-cell center v-for="(item,index) in list" :key="index" :title="item.label" />
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    title: String,
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {

  },
  created () {
  },
  computed: {

  },
  methods: {

  }
}
</script>
<style scoped lang='less'>
div.title{
    height: 16px;
    font-size: 14px;
    padding: 10px 15px;
    color: #999;
}
    :deep(.van-cell){
      height: 50px;
      padding: 0 15px;
      font-size: 16px;
    }
</style>
