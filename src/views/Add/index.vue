<template>
  <div>
    <div>
      <NavBar :title="NavTitle"></NavBar>
    </div>
    <div class="rentTitle" style="color: #21b97a">房源信息</div>
    <van-cell
      title="小区名称"
      v-model="VillageName"
      is-link
      @click="$router.push('/rent/search')"
    />
    <van-cell :title="price" class="rentPrice">
      <input
        type="text"
        placeholder="请输入月租金/月"
        style="border: unset"
        v-model="rentPrice"
      />￥/月
    </van-cell>
    <van-cell title="建筑面积" class="rentArea"
      ><input
        type="text"
        placeholder="请输入建筑面积"
        style="border: unset"
        v-model="rentArea"
      />m²</van-cell
    >
    <van-cell
      :title="type"
      v-model="rentType"
      is-link
      @click="ShowTypePopupFn"
    />
    <van-popup
      v-model="isShowTypePopup"
      position="bottom"
      :style="{ height: '46%' }"
    >
      <Popuppick :columns="typeList" @getType="getTypeFn"></Popuppick>
    </van-popup>
    <van-cell
      title="所在楼层"
      v-model="rentFloor"
      is-link
      @click="ShowFloorPopupFn"
    />
    <van-popup
      v-model="isShowFloorPopup"
      position="bottom"
      :style="{ height: '46%' }"
    >
      <Popuppick :columns="floorList" @getFloor="getFloorFn"></Popuppick>
    </van-popup>
    <van-cell
      :title="orient"
      v-model="rentOrient"
      is-link
      @click="ShowOrientPopupFn"
    />
    <van-popup
      v-model="isShowOrientPopup"
      position="bottom"
      :style="{ height: '46%' }"
    >
      <Popuppick :columns="orientList" @getOrient="getOrientFn"></Popuppick>
    </van-popup>
    <div class="rentTitle">房屋标题</div>
    <div class="am-list-body">
      <input
        type="text"
        placeholder="请输入标题（例如：整租 小区名 2室 5000元)"
        v-model="rentHouseTitle"
      />
    </div>
    <div class="rentTitle">房屋图像</div>
    <div class="add-image">
      <van-uploader
        :after-read="afterRead"
        accept=".jpg,.png,.jpeg,.gif"
        v-model="fileList"
        multiple
      >
        <div class="uploader-border">
          <van-icon name="plus" class="plus" />
        </div>
      </van-uploader>
    </div>
    <div class="rentTitle">房屋配置</div>
    <HousePackage
      :list="labelList"
      :rentList="supportingList"
      @getSupportings="getSupportingsFn"
    ></HousePackage>
    <div class="bottom-TextArea">
      <div class="rentTitle">房屋描述</div>
      <van-cell-group>
        <van-field
          class="houseDesc"
          v-model="message"
          type="textarea"
          placeholder="请输入房屋描述信息"
        />
      </van-cell-group>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom-btn">
      <van-button type="default" @click="cancelFn">取消</van-button>
      <van-button type="primary" @click="rentalFn">提交</van-button>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import HousePackage from '@/components/HousePackage.vue'
import { getHouseConditions } from '@/api/house'
import { rental, upImage } from '@/api/user'
import Popuppick from './components/PopupPick.vue'
export default {
  data () {
    return {
      NavTitle: '发布房源',
      VillageName: '',
      rentPrice: '',
      rentArea: '',
      rentType: '请选择',
      typeValue: '',
      rentFloor: '请选择',
      floorValue: '',
      rentOrient: '请选择',
      orientValue: '',
      rentHouseTitle: '',
      fileList: [],
      imgList: [],
      imgs: '',
      message: '',
      supportingList: [],
      supportings: '',
      labelList: [],
      typeList: [],
      floorList: [],
      orientList: [],
      isShowTypePopup: false,
      isShowFloorPopup: false,
      isShowOrientPopup: false
    }
  },
  components: { NavBar, HousePackage, Popuppick },
  created () {
    this.getHouseConditions()
  },
  mounted () {
    this.VillageName = this.$route.params?.communityName ?? '请输入小区名称'
  },
  updated () {},
  computed: {
    price () {
      return '租' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '金'
    },
    type () {
      return '户' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '型'
    },
    orient () {
      return '朝' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + '向'
    },
    data () {
      return {
        title: this.rentHouseTitle,
        description: this.message,
        houseImg: this.imgs,
        orient: this.orientValue,
        supporting: this.supportings,
        price: this.rentPrice,
        roomType: this.typeValue,
        size: this.rentArea,
        floor: this.floorValue,
        community: this.$route.params?.community
      }
    }
  },
  methods: {
    cleanForm () {
      this.rentHouseTitle = ''
      this.message = ''
      this.fileList = ''
      this.rentOrient = '请选择'
      this.supportings = ''
      this.rentPrice = ''
      this.rentType = '请选择'
      this.rentArea = ''
      this.rentFloor = '请选择'
      this.VillageName = ''
    },
    afterRead (file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file)
      const fm = new FormData()
      fm.append('file', file.file)
      this.upImage(fm)
    },
    async getHouseConditions () {
      try {
        const res = await getHouseConditions()
        console.log(res)
        this.typeList = res.data.body.roomType
        this.floorList = res.data.body.floor
        this.orientList = res.data.body.oriented
        this.supportingList = res.data.body.supporting
        this.supportingList.forEach((item) => {
          this.labelList.push(item.label)
        })
      } catch (error) {}
    },
    ShowTypePopupFn () {
      console.log(1)
      this.isShowTypePopup = !this.isShowTypePopup
    },
    ShowFloorPopupFn () {
      console.log(1)
      this.isShowFloorPopup = !this.isShowFloorPopup
    },
    ShowOrientPopupFn () {
      console.log(1)
      this.isShowOrientPopup = !this.isShowOrientPopup
    },
    getTypeFn (value) {
      this.rentType = value.label
      this.typeValue = value.value
      this.isShowTypePopup = !this.isShowTypePopup
    },
    getFloorFn (value) {
      this.rentFloor = value.label
      this.floorValue = value.value
      this.isShowFloorPopup = !this.isShowFloorPopup
    },
    getOrientFn (value) {
      this.rentOrient = value.label
      this.orientValue = value.value
      this.isShowOrientPopup = !this.isShowOrientPopup
    },
    getSupportingsFn (list) {
      this.supportings = [...list].join('|')
      console.log(this.supportings)
    },
    async upImage (fm) {
      try {
        const res = await upImage(fm)
        console.log(res)
        const imgUrl = res.data.body[0]
        this.imgList.push(imgUrl)
        this.imgs = this.imgList.join('|')
        console.log(this.imgList)
      } catch (error) {}
    },
    rentalFn () {
      console.log(this.data)
      this.rental()
    },
    async rental () {
      try {
        const res = await rental(this.data)
        console.log(res)
        this.$dialog
          .confirm({
            title: '提示',
            message: '发布房源成功！',
            confirmButtonText: '继续发布',
            confirmButtonColor: '#108ee9',
            cancelButtonText: '去查看'
          })
          .then(() => {
            this.cleanForm()
            // on confirm
          })
          .catch(() => {
            this.$router.push('/home/list')
          })
      } catch (error) {
        this.$toast.fail('发布失败！！')
      }
    },
    cancelFn () {
      this.$dialog
        .confirm({
          title: '提示',
          message: '放弃发布房源？',
          confirmButtonText: '继续编辑',
          confirmButtonColor: '#108ee9',
          cancelButtonText: '放弃'
        })
        .then(() => {
          // on confirm
          this.$dialog.close()
        })
        .catch(() => {
          this.$router.push('/home/')
        })
    }
  }
}
</script>
<style scoped lang="less">
input::-webkit-input-placeholder {
  color: #bbcade;
}
.rentTitle {
  color: #333;
  font-size: 15px;
  border-bottom: 1px solid #eee;
  padding: 10px 15px 9px;
}
.rentPrice {
  .van-cell__value {
    margin-left: -4.63333rem;
    display: flex;
    justify-content: space-between;
  }
}
.rentArea {
  .van-cell__value {
    margin-left: -4.63333rem;
    display: flex;
    justify-content: space-between;
  }
}
.am-list-body {
  input {
    font-size: 14px;
    margin: 12px 15px;
    border: unset;
    width: 90%;
  }
}
.add-image {
  padding: 9px 8px 0;
  margin-bottom: 15px;
  .uploader-border {
    width: 78px;
    height: 78px;
    text-align: center;
    line-height: 78px;
    border: 1px solid #eee;
    .plus {
      font-size: 30px;
      color: #ccc;
    }
  }
}
.bottom-TextArea {
  padding: 20px 0 70px;
  background-color: #f5f5f9;
  .rentTitle {
    background-color: #fff;
  }
  .houseDesc {
    width: 100%;
    height: 147px;
  }
}
.bottom-btn {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  .van-button {
    width: 50%;
    height: 45px;
  }
  .van-button--default {
    color: #21b97a;
  }
  .van-button--primary {
    background-color: #21b97a;
  }
}
</style>
