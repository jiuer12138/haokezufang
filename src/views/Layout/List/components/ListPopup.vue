<template>
  <van-popup
    v-model="isShow"
    position="right"
    :style="{ height: '100%', width: '295px' }"
    get-container="body"
    class="Selections"
  >
    <van-cell title="户型" class="VanCell">
      <template #label>
        <div class="VanRow">
          <van-row gutter="0.5rem" justify="space-between">
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
          </van-row>
        </div>
      </template>
    </van-cell>
    <van-cell title="朝向" class="VanCell">
      <template #label>
        <div class="VanRow">
          <van-row gutter="0.5rem" justify="space-between">
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
          </van-row>
        </div>
      </template>
    </van-cell>
    <van-cell title="楼层" class="VanCell">
      <template #label>
        <div class="VanRow">
          <van-row gutter="0.5rem" justify="space-between">
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
          </van-row>
        </div>
      </template>
    </van-cell>
    <van-cell title="房屋亮点" class="VanCell">
      <template #label>
        <div class="VanRow">
          <van-row gutter="0.5rem" justify="space-between">
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
            <van-col>span: 8</van-col>
          </van-row>
        </div>
      </template>
    </van-cell>
    <div class="palce"></div>
    <div class="btn">
      <van-button type="default">清除</van-button>
      <van-button type="primary">确定</van-button>
    </div>
  </van-popup>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  components: {},
  mounted () {},
  computed: {},
  methods: {}
}
</script>
<style scoped lang="less">
.Selections {
  padding-top: 20px;
  .van-cell__label {
    margin-top: 10px;
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
  .palce {
    height: 50px;
  }
}
.btn {
  position: absolute;
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
</style>
