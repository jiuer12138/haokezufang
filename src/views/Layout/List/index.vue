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
        <span @click="goCityList">{{ city.label }}</span
        ><i>▼</i>
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
      <van-dropdown-item v-model="value1" title="区域">
        <template #default>
          <DropDownList :columns="AreaDropdownList"></DropDownList>
        </template>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" title="方式">
        <template #default>
          <DropDownList :columns="rentType"></DropDownList>
        </template>
      </van-dropdown-item>
      <van-dropdown-item v-model="value3" title="租金">
        <template #default>
          <DropDownList :columns="price"></DropDownList>
        </template>
      </van-dropdown-item>
      <van-dropdown-item
        v-model="value4"
        title="筛选"
        @open="$refs.popup.isShow = true"
        class="Select"
      >
      </van-dropdown-item>
      <ListPopup ref="popup" :list="list"></ListPopup>
    </van-dropdown-menu>

    <!-- 下方列表部分 -->
    <div class="ListTab"></div>
  </div>
</template>
<script>
import DropDownList from '@/components/DropDownList.vue'
import { getCity } from '@/utils'
import { findHouse } from '@/api/house'
import { addChildren } from './resolveData.js'
import ListPopup from './components/ListPopup.vue'
export default {
  name: 'List',
  data () {
    return {
      city: { label: '北京', value: 'AREA|88cff55c-aaa4-e2e0' },
      cityId: '',
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      AreaDropdownList: [],
      rentType: [],
      price: [],
      list: []
    }
  },
  components: {
    DropDownList,
    ListPopup
  },
  created () {
    this.city = getCity()
    this.cityId = getCity().value
    // console.log(this.city, this.cityId)
    this.findHouse()
  },
  computed: {},
  methods: {
    goCityList () {
      this.$router.push('/city')
    },
    async findHouse () {
      try {
        const res = await findHouse(this.cityId)
        console.log(res)
        const data = res.data.body
        this.list = data
        addChildren(data.area.children)
        addChildren(data.subway.children)
        // console.log(res.data.body.area)
        // console.log(res.data.body.subway)
        this.AreaDropdownList.push(data.area, data.subway)
        // console.log(this.AreaDropdownList)
        this.rentType = data.rentType
        this.price = data.price
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped lang="less">
.van-search {
  padding: 8px 10px;
  :deep(.van-field__left-icon) {
    padding-left: 14px;
    border-left: 1px solid #ddd;
  }
  :deep(.van-field__control) {
    padding-left: 4px;
    font-size: 13px;
    color: #9c9fa1;
  }
}
.van-icon-arrow-left {
  margin-right: 14px;
  font-size: 20px;
  color: #fff;
}
.icon-ditu1 {
  margin-left: 5px;
  font-size: 24px;
  color: #fff;
}
.Select {
  :deep(.van-overlay) {
    display: none;
  }
}
</style>
