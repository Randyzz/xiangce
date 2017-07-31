<template>
  <div v-show="showSetting"  class="setting">
    <header><span class="icon-back" @click="back()"></span>Set up</header>
    <div class="setting-wrapper"  ref="setting">
      <div class="setting-scroll">
        <ul class="setting-list" v-if="hasToken()">
          <li v-for="(item, index) in settings" class="item" @click="setting(index)">
            <div>
              <span :class="item.icon" class="icon"></span>
              <p class="text">{{item.text}}</p>
            </div>
          </li>
        </ul>
        <ul class="setting-list" v-else>
          <li v-for="(item, index) in settings" class="item" @click="setting(index)">
            <div>
              <span :class="item.icon" class="icon"></span>
              <p class="text" v-if="index !== 0">{{item.text}}</p>
              <p class="text" v-if="index === 0">hi,{{email}}</p>
              <span class="cart-count" v-if="index === 1">12</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <login ref="login"></login>
    <el-dialog
      :visible.sync="dialogVisible"
      size="large">
      <span>Are you sure to logout?</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
    </el-dialog>
    <orders ref="orders"></orders>
    <packages ref="packages"></packages>
    <psend ref="psend"></psend>
    <pprint ref="pprint"></pprint>
    <design ref="design"></design>
    <addr ref="addr"></addr>
    <news ref="news"></news>
    <password ref="password"></password>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import login from '../login/login.vue'
  import orders from '../orders/orders.vue'
  import packages from '../package/package.vue'
  import design from '../design/design.vue'
  import addr from '../address/address.vue'
  import news from '../news/news.vue'
  import password from '../password/password.vue'
  import auth from '../../auth/auth'
  import psend from '../packagesend/packagesend.vue'
  import pprint from '../packageprint/packageprint.vue'
  export default {
    data () {
      return {
        showSetting: false,
        dialogVisible: false,
        settings: [
          {'text': 'Log In', 'icon': 'icon-login'},
          {'text': 'Orders', 'icon': 'icon-Orders'},
          {'text': 'Package', 'icon': 'icon-package'},
          {'text': 'Design', 'icon': 'icon-design'},
          {'text': 'Address', 'icon': 'icon-address'},
          {'text': 'News', 'icon': 'icon-news'},
          {'text': 'Password', 'icon': 'icon-password'}],
        index: {0: 'login', 1: 'orders', 2: 'package', 3: 'design', 4: 'address', 5: 'news', 6: 'password'},
        email: ''
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
      })
      this.$http.jsonp('https://bird.ioliu.cn/v1/?url=http://104.250.140.74:8000/api/account/profile?access_token=SampleToken', {
        headers: auth.getAuthHeader()
      }).then((response) => {
        this.email = response.data.firstName
      })
    },
    methods: {
      show () {
        this.showSetting = true
      },
      back () {
        this.showSetting = false
      },
      _initScroll () {
        if (!this.settingScroll) {
          this.settingScroll = new BScroll(this.$refs['setting'], {
            click: true
          })
        } else {
          this.settingScroll.refresh()
        }
      },
      setting (i) {
        switch (i) {
          case 0:
            this.hasToken() ? this.$refs.login.show() : this.dialogVisible = true
            break
          case 1:
            this.hasToken() ? this.$refs.login.show() : this.$refs.orders.show()
            break
          case 2:
            this.hasToken() ? this.$refs.login.show() : this.$refs.pprint.show()
            break
          case 3:
            this.hasToken() ? this.$refs.login.show() : this.$refs.design.show()
            break
          case 4:
            this.hasToken() ? this.$refs.login.show() : this.$refs.addr.show()
            break
          case 5:
            this.hasToken() ? this.$refs.login.show() : this.$refs.news.show()
            break
          case 6:
            this.hasToken() ? this.$refs.login.show() : this.$refs.password.show()
            break
        }
      },
      hasToken () {
        var token = localStorage.getItem('token')
        if (!token) {
          return true
        }
        return false
      }
    },
    components: {
      login,
      orders,
      packages,
      design,
      addr,
      news,
      password,
      psend,
      pprint
    }
  }
</script>
<style scoped>
  .setting {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 30;
    background-color: #fff;
  }
  header{
    height: 40px;
    line-height:40px;
    text-align: center;
    border-bottom:1px solid rgba(7,17,27,0.1);
    font-weight: 500;
    color:#666;
    font-size:16px;
    background: #fff;
    z-index: 500;
  }
  .icon-back {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .icon {
    font-size: 40px;
    color:lightseagreen;
    position: relative;
  }
  .setting-wrapper{
    margin-top:41px;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }
  .setting-scroll{
    background-color: rgba(180,180,180,0.3);
    height: 650px;
    overflow: hidden;
  }
  ul.setting-list{
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    /*justify-content: center;*/
  }
  .setting-list li.item {
    width: 142px;
    height: 142px;
    margin: 8px;
    text-align: center;
    border-radius: 5px;
    background-color: #fff;
  }
  li.item div{
    margin-top: 30px;
  }
  li.item div .text{
    margin-top: 15px;
    color: #7e8c8d;
  }
  .cart-count{
    display: inline-block;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    color: #fff;
    background-color: red;
    position: absolute;
    right:60px;
    top: 25px;
  }
</style>
