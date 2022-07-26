<template>
  <div class="detail-container">
    <NavBar :title="houseDetailList.community"></NavBar>
    <div class="basic-details">
      <van-image :src="'http://liufusong.top:8080' + url" />
      <van-cell :title="houseDetailList.title" class="houseTitle">
        <template #label>
          <span class="tags">{{ tag }}</span>
        </template>
      </van-cell>
      <van-row class="row">
        <div class="row1">
          <van-col span="8"
            >{{ houseDetailList.price }}<span class="month">/月</span></van-col
          >
          <van-col span="8">{{ houseDetailList.roomType }}</van-col>
          <van-col span="8">{{ houseDetailList.size }}平米</van-col>
        </div>
        <div class="row2">
          <van-col span="8">租金</van-col>
          <van-col span="8">房型</van-col>
          <van-col span="8">面积</van-col>
        </div>
      </van-row>
      <van-row class="typeRow">
        <van-col span="12"><span class="typeTitle">装修： </span>精装</van-col>
        <van-col span="12"
          ><span class="typeTitle">朝向： </span>{{ oriented }}</van-col
        >
        <van-col span="12"
          ><span class="typeTitle">楼层： </span
          >{{ houseDetailList.floor }}</van-col
        >
        <van-col span="12"
          ><span class="typeTitle">类型： </span>普通住宅</van-col
        >
      </van-row>
      <!-- 下半部分 -->
      <div class="bottom-content">
        <!-- 地图区域 -->
        <div class="HouseDetail_map">地图区域</div>
        <!-- 房屋配套 -->
        <van-cell title="房屋配套" class="HouseDetail_houseTitle" />
        <div class="HousePackage">
          <HousePackage :list="list"></HousePackage>
        </div>
        <!-- 房屋概况 -->
        <div class="HouseDetail_contact">
          <div class="HouseDetail_contact_title">房源概况</div>
          <van-cell>
            <template #title>
              <van-image
                class="HouseDetail_user"
                fit="contain"
                round
                src="http://liufusong.top:8080/img/avatar.png"
              />
              <div class="HouseDetail_useInfo">王女士</div>
              <div class="HouseDetail_userAuth">
                <van-icon name="passed" />
                <span>已认证房主</span>
              </div>
              <van-button plain type="primary" class="HouseDetail_userMsg"
                >发消息</van-button
              >
            </template>
            <template #label>
              <p class="HouseDetail_descText">
                1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
                2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
                3.人车分流，环境优美。
                4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
              </p>
            </template>
          </van-cell>
        </div>
        <!-- 猜你喜欢 -->
      </div>
    </div>
    <div class="HouseDetail_guesslike">猜你喜欢</div>
    <van-cell-group v-for="(item, index) in guesslikeList" :key="index">
      <VanCellComponent :obj="item"></VanCellComponent>
    </van-cell-group>
    <div class="place"></div>
    <div class="HouseDetail_fixedBottom">
      <van-button type="default" @click="changeCollection"
        >收藏
        <template #icon>
          <van-icon name="star-o" v-if="!isCollet" />
          <van-icon name="star" v-else class="active" />
        </template>
      </van-button>
      <van-button type="default">在线咨询</van-button>
      <van-button type="primary">电话预约</van-button>
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'
import { HouseDetail } from '@/api/house'
import { addCollect, removeCollect, judgeCollect } from '@/api/user'
import HousePackage from '@/components/HousePackage.vue'
import VanCellComponent from '@/components/VanCell.vue'
export default {
  data () {
    return {
      isCollet: false,
      houseDetailList: {},
      url: '',
      tag: '',
      oriented: '',
      list: [],
      guesslikeList: [
        {
          houseImg: '/uploads/upload_d0fffb4d198a51e103a6b29a58548d3f.jpg',
          title: '123456',
          tags: ['近地铁'],
          price: 1000,
          desc: '二室/200/东/北京财富中心',
          houseCode: '0f9042a9-ca1e-caa1'
        },
        {
          houseImg: '/uploads/upload_c55285b41075977865271a2d81b43aa8.jpg',
          title: '123456',
          tags: ['近地铁'],
          price: 25200,
          desc: '三室/100/东南/北京香颂',
          houseCode: 'c06f7786-5826-9275'
        },
        {
          houseImg: '/uploads/upload_7ea71961e3054fe8037e6698cade010a.png',
          title: '·12345',
          tags: ['近地铁'],
          price: 1234,
          desc: '一室/234/东/前进花园玉兰苑',
          houseCode: '99d045ef-07af-e6a6'
        }
      ]
    }
  },
  components: {
    NavBar,
    HousePackage,
    VanCellComponent
  },
  created () {
    this.HouseDetail()
    this.judgeCollect()
  },
  computed: {},
  methods: {
    async HouseDetail () {
      try {
        const res = await HouseDetail(this.$route.params.id)
        this.houseDetailList = res.data.body
        console.log(this.houseDetailList)
        this.url = res.data.body.houseImg[0]
        this.tag = res.data.body.tags[0]
        this.oriented = res.data.body.oriented[0]
        this.list = res.data.body.supporting
      } catch (error) {
        console.log(error)
      }
    },
    changeCollection () {
      if (!this.isCollet) {
        this.addCollect()
      } else {
        this.removeCollect()
      }
      this.isCollet = !this.isCollet
    },
    async addCollect () {
      try {
        const res = await addCollect(this.$route.params.id)
        console.log(res)
        this.$toast.success('添加收藏成功')
      } catch (error) {
        this.$toast.fail('添加收藏失败，请稍后再试')
      }
    },
    async removeCollect () {
      try {
        const res = await removeCollect(this.$route.params.id)
        console.log(res)
        this.$toast.success('取消收藏成功')
      } catch (error) {
        this.$toast.fail('取消收藏失败，请稍后再试')
      }
    },
    async judgeCollect () {
      try {
        const res = await judgeCollect(this.$route.params.id)
        this.isCollet = res.data.body.isFavorite
        console.log(this.isCollet)
      } catch (error) {}
    }
  }
}
</script>
<style scoped lang="less">
.detail-container {
  .place {
    height: 50px;
  }
  .basic-details {
    :deep(.van-image) {
      width: 100%;
      margin-top: -5px;
      height: 252px;
      overflow: hidden;
      margin-bottom: 10px;
    }
    :deep(.van-cell) {
      height: 85px;
      padding: 0 0.33333rem;
      border-bottom: 1px solid #ddd;
    }
    .houseTitle {
      .van-cell__title {
        font-size: 16px;
        padding: 0 0.33333rem;
      }
      .van-cell__label {
        margin-top: 0.43333rem;
        .tags {
          padding: 2px 3px;
          color: #39becd;
          background: #e1f5f8;
        }
      }
    }
    .row {
      margin: 0 12px;
      height: 1.74rem;
      border-bottom: 1px solid #ddd;
      .row1 {
        margin-top: 18px;
        text-align: center;
        color: #fa5741;
        font-size: 18px;
        font-weight: bolder;

        .month {
          font-size: 14px;
          font-weight: 400;
        }
      }
      .row2 {
        min-height: 0.62667rem;
        margin-top: 10px;
        text-align: center;
        color: #999;
        font-size: 14px;
      }
    }
    .typeRow {
      height: 1.43333rem;
      padding: 15px;
      .van-col {
        font-size: 14px;
        margin-bottom: 5px;
      }
      .typeTitle {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .bottom-content {
    background-color: #f6f5f6;
    padding-top: 10px;
    min-height: 400px;
    .HouseDetail_map {
      height: 189px;
      background-color: #fff;
    }
    .HouseDetail_houseTitle {
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 10px;
      height: 48px;
      padding: 15px 0;
      border-bottom: 1px solid #cecece;
    }
    .HousePackage {
      margin-top: -10px;
    }
    .HouseDetail_contact {
      height: 266px;
      margin-top: 10px;
      .HouseDetail_contact_title {
        font-size: 15px;
        line-height: 52px;
        border-bottom: 1px solid #cecece;
        height: 52px;
        background-color: #fff;
      }
      :deep(.van-cell) {
        height: 204px;
      }
      .HouseDetail_user {
        float: left;
        width: 52px;
        height: 52px;
        margin: 10px 10px 0 0;
      }
      .HouseDetail_useInfo {
        width: 100px;
        margin: 20px 0 0 15px;
        font-size: 14px;
      }
      .HouseDetail_userAuth {
        width: 200px;
        font-size: 12px;
        color: #fa5741;
        margin-top: -3px;
        span {
          margin-left: 5px;
        }
      }
      .van-cell__value {
        height: 70px;
      }
      .HouseDetail_userMsg {
        width: 74px;
        height: 29px;
        position: absolute;
        right: 15px;
        top: 20px;
        color: #33be85;
        border: 1px solid #33be85;
        border-radius: 3px;
        padding: 3px 15px;
      }
      .HouseDetail_descText {
        font-size: 14px;
        line-height: 1.6;
        padding: 10px 0;
        color: #333;
        padding-top: 0;
      }
    }
    .HouseDetail_guesslike {
      height: 266px;
      margin-top: 10px;
      font-size: 15px;
      line-height: 52px;
      border-bottom: 1px solid #cecece;
      height: 52px;
      background-color: #fff;
    }
  }
  .HouseDetail_fixedBottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #cecece;
    text-align: center;
    color: #999;
    background-color: #fff;
    .van-button {
      font-size: 17px;
      height: 100%;
      width: 33.3%;
    }
    .van-button--default {
      color: #999;
    }
    .van-button--primary {
      background-color: #21b97a;
    }
    .active {
      color: red;
    }
  }
}
</style>
