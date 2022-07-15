<template>
  <div>
<van-search
  v-model="value"
  show-action
  label="地址"
   background="#21b97a"
  placeholder="请输入小区或地址"
  @search="onSearch"
>
  <template #action>
    <div @click="onSearch">搜索</div>
  </template>
</van-search>
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" title='区域'>
    <template #default>
    <DropDownList :columns="columns"></DropDownList>
    </template>
  </van-dropdown-item>
   <van-dropdown-item v-model="value2" title='方式'>
    <template #default>
    <DropDownList :columns="columns1"></DropDownList>
    </template>
  </van-dropdown-item>
  <van-dropdown-item v-model="value3" title='租金'>
    <template #default>
    <DropDownList :columns="columns2"></DropDownList>
    </template>
  </van-dropdown-item>
   <van-dropdown-item v-model="value4" title='筛选' is-link @click="showPopup">
      <van-popup v-model="show" position="right"  :overlay="true"  :style="{ height: '30%' }"/>
  </van-dropdown-item>
</van-dropdown-menu>

<van-cell-group>
  <VanCell></VanCell>
</van-cell-group>
  </div>
</template>
<script>
import DropDownList from '@/components/DropDownList.vue'
import VanCell from '@/components/VanCell.vue'
export default {
  data () {
    return {
      show: false,
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      columns: [
        {
          text: '浙江',
          children: [
            {
              text: '杭州',
              children: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              children: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          children: [
            {
              text: '福州',
              children: [{ text: '鼓楼区' }, { text: '台江区' }]
            },
            {
              text: '厦门',
              children: [{ text: '思明区' }, { text: '海沧区' }]
            }
          ]
        }
      ],
      columns1: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州'],
      columns2: [1000, 2000, 3000, 4000, 5000]
    }
  },
  components: {
    DropDownList,
    VanCell
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    onSearch (val) {
      console.log(val)
    },
    showPopup () {
      this.show = true
    }
  }
}
</script>
<style scoped lang='less'>
:deep(.van-dropdown-menu__title--active){
  color: #21b97a;
}
</style>
