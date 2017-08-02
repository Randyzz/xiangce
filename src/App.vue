<template>
  <div>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/home"><span class="icon-home"></span></router-link>
      </div>
      <div class="tab-item">
        <router-link to="/cart"><span class="icon-cart"></span></router-link>
      </div>
      <div class="tab-item">
        <router-link to="/info"><span class="icon-info"></span></router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :taxons="taxons"></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        taxons: {
          type: Object
        },
        cart: {
          type: Object
        }
      }
    },
    created () {
      this.$http.get('https://bird.ioliu.cn/v1/?url=http://104.250.140.74:8000/api/v1/taxons/album', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.taxons = response.data
      })
//      this.$http.jsonp('https://bird.ioliu.cn/v1/?url=http://104.250.140.74:8000/api/v1/taxons/album-hard-cover-8x8inch', {
//        headers: {
//          'Content-Type': 'application/json'
//        }
//      }).then((response) => {
//        this.cart = response.data
//        console.log(this.cart)
//      })
    }
  }
</script>

<style>
  @import 'common/style/icon.css';
   .tab{
    display: flex;
    width: 100%;
    height: 50px;
    line-height:50px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .tab-item{
    flex:1;
    text-align: center;
  }
  .tab-item .active{
    color:lightseagreen;
  }
  .tab:after{
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    border-top:1px solid rgba(7,17,27,0.1);
    content: ' ';
  }
  .icon-home,.icon-cart,.icon-info{
    font-size:24px;
  }
</style>
