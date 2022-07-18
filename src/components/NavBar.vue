<template>
  <div>
<van-nav-bar
  fixed
  class='NavBar'
  :title="title"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="palce"></div>
  </div>

</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: {
    title: {
      type: String
    }
  },
  components: {

  },
  mounted () {

  },
  computed: {

  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang='less'>
.NavBar{
    background-color:#21b97a;
    :deep(.van-nav-bar__title){
        color:#fff;
        font-size: 18px;
    }
    :deep(.van-icon){
         color:#fff;
    }
}
.palce{
  height: 50px;
}
</style>
