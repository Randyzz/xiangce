<template>
  <div v-show="showLogin" class="login" ref="logins">
    <span class="icon-del" @click="close()"></span>
    <div class="login-wrapper">
      <div class="signOrLog" v-if="this.toggleForText==='Forgot password?'">
        <span class="sign" :class="{'active':toggleSign}" @click="toggle()">{{toggleSignUp}}</span>
        <span class="log" :class="{'active':toggleLog}" @click="toggle()">{{toggleLogin}}</span>
      </div>
      <div class="forgetPsd" v-if="this.toggleForText==='Log in'">
        <span>Forgot password</span>
      </div>
      <form action="">
        <div class="login-form">
          <div><span class="icon-email"></span> <input type="email" title="email" v-model="email"
                                                       placeholder="Your Email"></div>
          <hr>
          <div  v-if="this.toggleForText==='Forgot password?'">
            <span class="icon-pwd"></span>
            <input type="password" title="password" placeholder="Password" v-model="pwd">
            <hr>
          </div>

        </div>
      </form>
      <div class="choose" @click="submit()" v-model="toggleBold">{{toggleBold}}</div>
      <div class="forgot" @click="toggleForgot()">{{toggleForText}}</div>
      <div class="facebook"><a href="https://www.facebook.com">facebook</a></div>
    </div>
  </div>
</template>
<script>
  import auth from '../../auth/auth'
  export default {
    data () {
      return {
        showLogin: false,
        toggleSign: true,
        toggleLogin: 'Log in',
        toggleSignUp: 'Sign up',
        toggleLog: false,
        toggleFor: true,
        toggleBold: 'SIGN UP',
        toggleForText: 'Forgot password?',
        email: '',
        pwd: '',
        userInfo: ''
      }
    },
    methods: {
      show () {
        var token = localStorage.getItem('token')
        if (!token) {
          this.showLogin = true
        } else {
          this.showLogin = false
        }
      },
      close () {
        this.showLogin = false
      },
      toggle () {
        this.toggleSign = !this.toggleSign
        this.toggleLog = !this.toggleLog
        this.toggleBold = this.toggleSign ? this.toggleSignUp : this.toggleLogin
      },
      toggleForgot () {
        if (this.toggleForText === 'Forgot password?') {
          this.toggleForText = 'Log in'
          this.toggleBold = 'RESET PASSWORD'
        } else {
          this.toggleForText = 'Forgot password?'
          this.toggleBold = 'SIGN UP'
        }
      },
      submit () {
        if (this.toggleBold === 'SIGN UP') {
          console.log(1)
        } else {
          var info = {
            username: this.email,
            pwd: this.pwd
          }
          auth.login(this, info)
        }
        this.$http.jsonp('https://bird.ioliu.cn/v1/?url=http://104.250.140.74:8000/api/account/profile?access_token=SampleToken', {
          headers: auth.getAuthHeader()
        }).then((response) => {
          this.userInfo = response.data
          this.$parent.username = this.userInfo.email
        })
        this.showLogin = false
      },
      logout () {
        prompt('Are you su')
      }
    }
  }
</script>
<style scoped>
  .login{
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    background-color: #fff;
    color: #fff;
  }
  .icon-del{
    position: absolute;
    left: 10px;
    top: 10px;
    color: #7e8c8d;
  }
  .login-wrapper{
    width: 80%;
    height: 80%;
    margin:50px auto;
  }
  .signOrLog{
    width: 100%;
    display: flex;
  }
  .signOrLog span{
    flex:1;
    height: 50px;
    line-height: 50px;
    background-color: gray;
  }
  .signOrLog .active{
    background-color: lightseagreen;
  }
  .login-form {
    width: 100%;
    margin-top: 30px;
    height: 96px;
    color:lightseagreen;
  }
  .login-form span{
    display: inline-block;
    font-size: 20px;
    line-height: 30px;
  }
  .login-form  input{
    height: 30px;
    color:lightseagreen;
    border:none;
    outline:none;
  }
  ::-webkit-input-placeholder{
    color: #ccc;
  }
  .choose{
    width: 100%;
    height: 50px;
    font-weight: bold;
    line-height: 50px;
    margin-top: 40px;
    background-color: lightseagreen;
  }
  .forgot{
    width: 100%;
    font-size: 14px;
    margin-top: 30px;
    color:#7e8c8d;
  }
  .facebook{
    width: 100%;
    height: 50px;
    margin-top: 50px;
    line-height: 50px;
    font-size: 26px;
    background-color: midnightblue;
  }
  .forgetPsd{
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    background-color: lightseagreen;
    color:#fff;
    text-align: center;
  }
</style>

