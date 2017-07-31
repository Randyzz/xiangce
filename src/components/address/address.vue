<template>
  <div class="orders" v-show="showFlag">
    <header><span class="icon-back" @click="back()"></span>Address</header>
    <div class="add-addr">
      <span class="icon-car"></span>
      <p class="text">Click here to add the address</p>
      <span class="icon-down"></span>
      <div class="add" @click="addAddr()">
        Add Address
      </div>
    </div>
    <shoppingaddr ref="shopaddr"></shoppingaddr>
  </div>
</template>
<script>
  import shoppingaddr from '../shoppingaddr/shoppingaddr.vue'
  export default {
    data () {
      return {
        showFlag: false
      }
    },
    methods: {
      show () {
        this.showFlag = true
      },
      back () {
        this.showFlag = false
      },
      addAddr () {
        this.$refs.shopaddr.show()
      }
    },
    components: {
      shoppingaddr
    }
  }
</script>
<style scoped>
  .orders {
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
  .add-addr{
    text-align: center;
    margin-top: 30vh;
  }
  .icon-car {
    font-size: 80px;
  }
  .text{
    margin: 20px 0;
    color:#7e8c8d;
  }
  .icon-down{
    font-size: 80px;
  }
  .add{
    width: 100%;
    height: 50px;
    line-height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 18px;
    color: #fff;
    background-color: lightseagreen;
  }
</style>
