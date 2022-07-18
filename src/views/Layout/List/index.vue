<template>
  <div>
  <!-- 头部搜索框 -->
<van-search
  v-model="value"
  placeholder="请输入小区或地址"
  background="#21b97a"
  show-action
>
<template #label>
    <span @click="goCityList">北京</span><i>▼</i>
  </template>
<template #left>
    <van-icon name="arrow-left" />
  </template>
  <template #action>
    <span class="iconfont icon-ditu1"></span>
  </template>
</van-search>
<!-- 中间下拉选择器 -->
<van-dropdown-menu active-color="#21b97a">
  <van-dropdown-item v-model="value1" title='区域'>
  <template #default>
    <DropDownList :columns="option1"></DropDownList>
  </template>
  </van-dropdown-item>
  <van-dropdown-item v-model="value2" title='方式'>
  <template #default>
    <DropDownList :columns="option1"></DropDownList>
  </template>
  </van-dropdown-item>
  <van-dropdown-item v-model="value3" title='租金'>
    <template #default>
    <DropDownList :columns="option1"></DropDownList>
  </template>
  </van-dropdown-item>
   <van-dropdown-item v-model="value4" title='筛选'  @open="show1 = true" class='Select'>
  </van-dropdown-item>
    <van-popup v-model="show1" position="right" :style="{ height: '100%',width: '295px' }" get-container="body">123</van-popup>
</van-dropdown-menu>

<!-- 下方列表部分 -->
<div class="ListTab">

</div>
  </div>
</template>
<script>
import DropDownList from '@/components/DropDownList.vue'
export default {
  data () {
    return {
      show1: false,
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  },
  components: {
    DropDownList
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    goCityList () {
      this.$router.push('/city')
    }
  }
}
</script>
<style scoped lang='less'>
.van-search{
  padding: 8px 10px;
  :deep(.van-field__left-icon){
    padding-left: 14px;
    border-left: 1px solid #ddd;
  }
  :deep(.van-field__control){
    padding-left: 4px;
    font-size: 13px;
    color: #9c9fa1;
  }
}
.van-icon-arrow-left{
  margin-right: 14px;
  font-size: 20px;
  color: #fff;
}
.icon-ditu1{
  margin-left: 5px;
  font-size: 24px;
  color: #fff;
}
.Select{
  :deep(.van-overlay){
    display: none;
  }
}
</style>
