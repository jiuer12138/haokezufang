<template>
  <div>
    <van-cell class="ListItem">
      <template #icon>
        <van-image width="100" height="100" :src="imgUrl" />
      </template>
      <template #default>
        <div class="container">
          <h3>{{ obj.title }}</h3>
          <div class="Size">{{ obj.desc }}</div>
          <div class="tags" v-for="(item, index) in obj.tags" :key="index">
            {{ item }}
          </div>
          <div class="price">
            <span>{{ obj.price }}</span
            >元/月
          </div>
        </div>
      </template>
    </van-cell>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgUrl: ''
    }
  },
  props: {
    obj: {
      type: Object,
      default: () => ({})
    }
  },
  components: {},
  created () {
    this.imgUrl = 'http://liufusong.top:8080' + this.obj.houseImg
    // console.log(this.imgUrl)
  },
  computed: {},
  methods: {}
}
</script>
<style scoped lang="less">
.ListItem {
  border-bottom: 1px solid #e5e5e5;
  padding: 18px 0 0;
  height: 120px;
  :deep(.van-image__img) {
    width: 106px;
    height: 80px;
  }
  .container {
    padding-left: 12px;
    font-size: 12px;
    line-height: 22px;
    h3 {
      margin: 0;
      font-size: 14px;
    }
    .Size {
      color: #afb2b3;
    }
    .tags {
      display: inline-block;
      color: #39becd;
      background: #e1f5f8;
    }
    .price {
      color: #fa5741;
      font-weight: 700;
      span {
        font-size: 16px;
      }
    }
  }
}
</style>
