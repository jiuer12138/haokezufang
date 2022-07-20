<template>
  <div>
    <!-- 头部搜索框 -->
    <van-search
      class="van-search-container"
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
    <div class="place"></div>
    <div class="DropDownList">
      <van-dropdown-menu active-color="#21b97a">
        <van-dropdown-item title="区域" ref="isShowDropDownList1">
          <template #default>
            <DropDownList
              :columns="AreaDropdownList"
              @ShowDropDownList="ShowDropDownListFn"
              @getValue="getAreaValueFn"
            ></DropDownList>
          </template>
        </van-dropdown-item>
        <van-dropdown-item title="方式" ref="isShowDropDownList2">
          <template #default>
            <DropDownList
              :columns="rentType"
              @ShowDropDownList="ShowDropDownListFn"
              @getValue="getrentTypeValueFn"
            ></DropDownList>
          </template>
        </van-dropdown-item>
        <van-dropdown-item title="租金" ref="isShowDropDownList3">
          <template #default>
            <DropDownList
              :columns="price"
              @ShowDropDownList="ShowDropDownListFn"
              @getValue="getpriceValueFn"
            ></DropDownList>
          </template>
        </van-dropdown-item>
        <van-dropdown-item
          title="筛选"
          @open="$refs.popup.isShow = true"
          class="Select"
        >
        </van-dropdown-item>
        <ListPopup ref="popup" :list="list"></ListPopup>
      </van-dropdown-menu>
    </div>
    <!-- 下方列表部分 -->
    <div class="ListTab">
      <VanCell
        v-for="item in houseList"
        :key="item.houseCode"
        :obj="item"
      ></VanCell>
    </div>
    <div class="place"></div>
  </div>
</template>
<script>
import VanCell from '@/components/VanCell.vue'
import DropDownList from '@/components/DropDownList.vue'
import { getCity } from '@/utils'
import { findHouse, selectHouse } from '@/api/house'
import { addChildren } from './resolveData.js'
import ListPopup from './components/ListPopup.vue'
export default {
  name: 'List',
  data () {
    return {
      city: { label: '北京', value: 'AREA|88cff55c-aaa4-e2e0' },
      value: '',
      AreaDropdownList: [],
      rentType: [],
      price: [],
      list: [],
      houseList: [],
      cityId: '',
      cityarea: '',
      citysubway: '',
      cityPrice: '',
      cityRentType: '',
      cityMore: ''
    }
  },
  components: {
    DropDownList,
    ListPopup,
    VanCell
  },
  created () {
    this.city = getCity()
    this.cityId = getCity().value
    // console.log(this.city, this.cityId)
    this.findHouse()
    this.selectHouse()
  },
  computed: {
    params () {
      return {
        cityId: this.cityId,
        area: this.cityarea,
        subway: this.citysubway,
        price: this.cityPrice,
        rentType: this.cityRentType,
        more: this.cityMore,
        start: 1,
        end: 20
      }
      // const params = {}
      // params.cityId = this.cityId
      // params.area = this.cityarea
      // params.subway = this.citysubway
      // params.price = this.cityPrice
      // params.rentType = this.cityRentType
      // params.more = this.cityMore
      // params.start = 1
      // params.end = 20
      // return params
    }
  },
  methods: {
    goCityList () {
      this.$router.push('/city')
    },
    async findHouse () {
      try {
        const res = await findHouse(this.cityId)
        // console.log(res)
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
    },
    async selectHouse () {
      try {
        const res = await selectHouse(this.params)
        // console.log(res)
        this.houseList = res.data.body.list
      } catch (error) {
        console.log(error)
      }
    },
    ShowDropDownListFn () {
      this.$refs.isShowDropDownList1.toggle(false)
      this.$refs.isShowDropDownList2.toggle(false)
      this.$refs.isShowDropDownList3.toggle(false)
    },
    getAreaValueFn (value) {
      this.cityarea = value
      console.log(this.cityarea)
    },
    getrentTypeValueFn (value) {
      this.cityRentType = value
      console.log(this.cityRentType)
    },
    getpriceValueFn (value) {
      this.cityPrice = value
      console.log(this.cityPrice)
    }
  }
}
</script>
<style scoped lang="less">
.van-search-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.DropDownList {
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 50px;
  left: 0;
}
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
.place {
  width: 100%;
  height: 50px;
}
.ListTab {
  margin-top: 1.36667rem;
}
</style>
