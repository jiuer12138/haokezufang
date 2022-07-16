<template>
  <div>
    <van-image width="100%" :src="isLogin? avatar : bg" fit="cover" />
    <!-- 个人信息部分 -->
    <div class="My_info" :class="{My_info1:isLogin}">
      <van-image
        round
        width="60px"
        height="60px"
        :src = "Avatar"
      />
      <p>{{UserInfo.nickname}}</p>
      <van-button type="primary" size="small" @click="login" v-if="!isLogin">去登录</van-button>
      <div v-else class='exit-edit'>
        <van-button type="primary" size="mini" @click="exitFn">退出</van-button>
        <p>编辑个人资料▶</p>
      </div>
    </div>
    <!-- 中间部分 -->
    <van-grid :column-num="3" clickable class="My_menu" :border="false" :class="{My_menu1 :isLogin }">
      <van-grid-item text="我的收藏">
        <template #icon>
          <span class="iconfont icon-shoucang"></span>
        </template>
      </van-grid-item>
      <van-grid-item text="我的出租">
        <template #icon>
          <span class="iconfont icon-fangzi"></span>
        </template>
      </van-grid-item>
      <van-grid-item text="看房记录">
        <template #icon>
          <span class="iconfont icon-shijian"></span>
        </template>
      </van-grid-item>
      <van-grid-item text="成为房主">
        <template #icon>
          <span class="iconfont icon-fangzhu"></span>
        </template>
      </van-grid-item>
      <van-grid-item text="个人资料">
        <template #icon>
          <span class="iconfont icon-geren"></span>
        </template>
      </van-grid-item>
      <van-grid-item text="联系我们">
        <template #icon>
          <span class="iconfont icon-24gl-headset"></span>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 下方图片 -->
    <van-image width="95%" :src="join" class="My_join" />
  </div>
</template>
<script>
import bg from '@/assets/bg.png'
import avatar from '@/assets/avatar.png'
import join from '@/assets/join.png'
import { userInfo } from '@/api/user'
export default {
  data () {
    return {
      bg,
      join,
      avatar,
      UserInfo: {}
    }
  },
  components: {},
  created () {
    this.userInfo()
  },
  computed: {
    isLogin () {
      return !!this.$store.state.user.token
    },
    Avatar () {
      return 'http://liufusong.top:8080' + this.userInfo.avatar
    }
  },
  methods: {
    login () {
      this.$router.push({
        path: '/login'
      })
    },
    exitFn () {
      this.$dialog.confirm({
        title: '提示',
        message: '确认要退出吗'
      })
        .then(() => {
          // on confirm
          this.$store.commit('setUser', {})
        })
        .catch(() => {
          // on cancel
        })
    },
    async userInfo () {
      try {
        const res = await userInfo()
        console.log(res)
        this.UserInfo = res.data.body
        console.log(this.UserInfo)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped lang="less">
.My_info {
  position: absolute;
  background: #fff;
  width: 75%;
  height: 25%;
  top: 85px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
  .van-image {
    margin-top: -30px;
    margin-bottom: 5px;
  }
  :deep(.van-button) {
    margin-top: 5px;
    background-color: #21b97a;
    font-size: 13px;
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    border-radius: 5px;
  }
}
.My_info1 {
  position: absolute;
  background: #fff;
  width: 75%;
  height: 30%;
  top: 125px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  margin: 50px auto 0;
  padding: 0 20px;
  text-align: center;
  font-size: 13px;
  .van-image {
    margin-top: -30px;
    margin-bottom: 5px;
  }
  :deep(.van-button) {
    margin-top: 0;
    background-color: #21b97a;
    font-size: 13px;
    height: 20px;
    line-height: 20px;
    padding: 0 15px;
    border-radius: 10px;
  }
  .exit-edit{
    p{
    color: #999;
    font-size: 12px;
    margin-top: 20px;
    }
  }
}
.van-grid {
  margin-top: 120px;
  margin-bottom: 12px;
  .van-grid-item {
    margin-bottom: 10px;
  }
}

.My_menu1 {
  margin-top: -30px;
  .iconfont {
    font-size: 23px;
  }
}
:deep(.van-image) {
  margin: 0 auto 50px;
  display: block;
}
</style>
