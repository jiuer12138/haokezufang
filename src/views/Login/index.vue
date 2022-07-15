<template>
  <div>
  <!-- 上方NavBar -->
  <van-nav-bar
  class='NavBar'
  title="账号登录"
  left-arrow
  @click-left="onClickLeft"
/>

<!-- 中间Form区域 -->
<van-form @submit="login" class="form">
  <van-field
    v-model="username"
    name="username"
    placeholder="请输入账号"
    :rules="[{ required: true}]"
    center
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    placeholder="请输入密码"
    :rules="[{ required: true}]"
    center
  />
  <div style="margin: 16px;">
    <van-button  block type="info" native-type="submit" class='login-btn'>登录</van-button>
  </div>
</van-form>

<!-- 下方跳转链接 -->
<a href="#/registe" class="link">还没有账号，去注册~</a>
  </div>
</template>
<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
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
    },
    async login () {
      try {
        const res = await login(this.username, this.password)
        console.log(res)
        if (res.data.status !== 200) return this.$toast.fail(res.data.description)
        this.$toast.success(res.data.description)
        localStorage.setItem('token', res.data.body.token)
        setTimeout(() => {
          this.$router.push({
            path: '/home/profiles',
            name: 'Profiles'
          })
        }, 2000)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped lang='less'>
.NavBar{
    background-color: #21b97a;
    :deep(.van-nav-bar__title){
        font-size: 18px;
        color: #fff;
    }
    :deep(.van-icon-arrow-left) {
        color: #fff;
    }
}
.form{
    margin-top: 21px;
    .van-cell {
        padding: 2px 20px;
        height: 60px;
        :deep(.van-field__control){
            font-size: 17px;
        }
    }
}
.login-btn{
    margin-top: 30px;
    background-color: #1cb676;
    font-size: 18px;
}
a.link{
  outline: none;
  font-size: 14px;
  color: #666;
  display:block;
  text-align: center;
  margin-top: 30px;
}
</style>
