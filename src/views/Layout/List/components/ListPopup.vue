<template>
  <div>
    <van-popup
      v-model="isShow"
      position="right"
      :style="{ height: '100%' }"
      get-container="body"
      class="Selections"
    >
      <van-cell title="户型" class="VanCell">
        <template #label>
          <div class="VanRow">
            <van-row gutter="0.5rem" justify="space-between">
              <van-col
                v-for="item in list.roomType"
                :key="item.value"
                :class="{ active: Active.indexOf(item.value) !== -1 }"
                @click="selectItem(item.value)"
                >{{ item.label }}</van-col
              >
            </van-row>
          </div>
        </template>
      </van-cell>
      <van-cell title="朝向" class="VanCell">
        <template #label>
          <div class="VanRow">
            <van-row gutter="0.5rem" justify="space-between">
              <van-col
                v-for="item in list.oriented"
                :key="item.value"
                :class="{ active: Active.indexOf(item.value) !== -1 }"
                @click="selectItem(item.value)"
                >{{ item.label }}</van-col
              >
            </van-row>
          </div>
        </template>
      </van-cell>
      <van-cell title="楼层" class="VanCell">
        <template #label>
          <div class="VanRow">
            <van-row gutter="0.5rem" justify="space-between">
              <van-col
                v-for="item in list.floor"
                :key="item.value"
                :class="{ active: Active.indexOf(item.value) !== -1 }"
                @click="selectItem(item.value)"
                >{{ item.label }}</van-col
              >
            </van-row>
          </div>
        </template>
      </van-cell>
      <van-cell title="房屋亮点" class="VanCell">
        <template #label>
          <div class="VanRow">
            <van-row gutter="0.5rem" justify="space-between">
              <van-col
                v-for="item in list.characteristic"
                :key="item.value"
                :class="{ active: Active.indexOf(item.value) !== -1 }"
                @click="selectItem(item.value)"
                >{{ item.label }}</van-col
              >
            </van-row>
          </div>
        </template>
      </van-cell>
      <div class="palce"></div>
    </van-popup>
    <van-popup
      class="btnPopup"
      v-model="isShow"
      position="right"
      get-container="body"
      :overlay="false"
    >
      <div class="btn">
        <van-button type="default" @click="clearFn">清除</van-button>
        <van-button type="primary">确定</van-button>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false,
      container: null,
      isActive: false,
      Active: []
    }
  },
  props: {
    list: {
      type: [Object, Array],
      required: true
    }
  },
  components: {},
  created () {},
  computed: {},
  methods: {
    chooseRoomType () {
      this.isActive = !this.isActive
    },
    selectItem (id) {
      if (this.Active.indexOf(id) === -1) {
        this.Active.push(id)
      } else {
        this.Active = this.Active.filter((item) => item !== id)
      }
      console.log(this.Active)
    },
    clearFn () {
      this.Active = []
      this.isShow = false
    }
  }
}
</script>
<style scoped lang="less">
.Selections {
  width: 295px;
  padding-top: 20px;
  .van-cell__label {
    margin-top: 10px;
    overflow: hidden;
  }
  .VanCell {
    border-bottom: 1px solid #ddd;
    margin: 0 15px;
    .VanRow {
      width: 225px;
      margin-left: 40px;
      .van-col {
        border: 1px solid #ddd;
        width: 70px;
        height: 32px;
        margin: 0 18px 15px 0;
        text-align: center;
        line-height: 32px;
      }
    }
  }
  .active {
    border: 1px solid #21b97a;
    color: #21b97a;
    background-color: #defaef;
  }
}
.palce {
  height: 50px;
}
.btnPopup {
  margin-top:46.8vh;
  height: 50px;
  width: 295px;
  .btn {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;

    .van-button--default {
      flex: 1;
      font-size: 18px;
      color: #21b97a;
      height: 50px;
    }
    .van-button--primary {
      height: 50px;
      font-size: 18px;
      color: #fff;
      background-color: #21b97a;
      flex: 2;
    }
  }
}
</style>
