<template>
  <div>
    <van-picker
      title="标题"
      show-toolbar
      value-key="label"
      :columns="columns"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  props: {
    columns: {
      type: Array,
      required: true
    }
  },
  created () {
    // this.show = this.isShow
  },
  computed: {},
  watch: {
  },
  methods: {
    onConfirm (value) {
      console.log(`当前值：${value.label}, 当前索引：${value.value}`)
      this.$emit('getType', value)
      this.$emit('getFloor', value)
      this.$emit('getOrient', value)
    },
    onCancel () {
      this.$emit('getType')
      this.$emit('getFloor')
      this.$emit('getOrient')
    }
  }
}
</script>
<style scoped></style>
