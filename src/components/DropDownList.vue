<template>
  <div>
    <van-picker :columns="columns" value-key="label" ref="pickerValue">
      <template #columns-bottom>
        <van-button type="default" @click="cancelFn">取消</van-button>
        <van-button type="primary" @click="getValue">确定</van-button>
      </template>
    </van-picker>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showPicker: true,
      selection: ''
    }
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  mounted () {},
  computed: {},
  methods: {
    getValue () {
      this.$emit('ShowDropDownList', false)
      const value = this.$refs.pickerValue.getValues()

      if (value.length === 3 && value[1].label !== '不限') {
        if (value[2].label === '不限') {
          this.selection = value[1].value
        }
        if (value[2].label !== '不限') {
          this.selection = value[2].value
        }
        // console.log(this.selection)
        // console.log(value[1].value)
      } else if (value.length === 3 && value[1].label === '不限') {
        this.selection = ''
      } else if (value.length === 1 && value[0].label !== '不限') {
        this.selection = value[0].value
      } else if (value.length === 1 && value[0].label === '不限') {
        this.selection = ''
      }
      // console.log(value)
      this.$emit('getValue', this.selection)
    },
    cancelFn () {
      this.$emit('ShowDropDownList')
    }
  }
}
</script>
<style scoped lang="less">
.van-picker {
  .van-button--default {
    width: 125px;
    .van-button__content {
      font-size: 18px;
      color: #21b97a;
    }
  }
  .van-button--primary {
    width: 250px;
    background-color: #21b97a;
    .van-button__content {
      font-size: 18px;
    }
  }
}
</style>
