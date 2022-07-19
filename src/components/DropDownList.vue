<template>
  <div>
      <van-picker  :columns="columns" value-key='label'>
<template #columns-bottom>
       <van-button type="default">取消</van-button>
       <van-button type="primary">确定</van-button>
      </template>
         </van-picker>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  components: {

  },
  mounted () {

  },
  computed: {

  },
  methods: {

  }
}
</script>
<style scoped lang='less'>
.van-picker{
  .van-button--default{
    width: 125px;
    .van-button__content{
      font-size: 18px;
      color: #21b97a;
    }
  }
  .van-button--primary{
    width:250px;
    background-color: #21b97a;
    .van-button__content{
      font-size: 18px;
    }
  }
}
</style>
