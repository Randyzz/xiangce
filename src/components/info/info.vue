<template>
  <div class="info" ref="info" v-show="showOff">
    <div class="header">
      <span class="title">Me</span>
      <span class="icon-set" @click="setting()"></span>
    </div>
    <div class="banner">
      <span class="login" @click="login()" v-model="username">{{username}}</span>
    </div>
    <setting ref="setting"></setting>
    <login ref="login"></login>
  </div>
</template>
<script>
  import setting from '../setting/setting.vue'
  import login from '../login/login.vue'
  export default {
    components: {
      setting,
      login
    },
    methods: {
      setting () {
        this.$refs.setting.show()
      },
      login () {
        this.$refs.login.show()
      }
    },
    data () {
      return {
        showOff: true,
        username: 'Login',
        userInfo: ''
      }
    }
  }
</script>
<style scoped>
  .header{
    width: 320px;
    height: 40px;
    line-height:40px;
    text-align: center;
    border-bottom:1px solid rgba(7,17,27,0.1);
    font-weight: 500;
    color:#666;
    font-size:16px;
    background: #fff;
  }
  .header .icon-set{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
  }
  .banner{
    height: 120px;
    position: relative;
    background-color: lightseagreen;
  }
  .login {
    position: absolute;
    right: 30px;
    color: #fff;
    bottom: 30px;
  }
</style>
