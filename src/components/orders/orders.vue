<template>
  <div class="orders" v-show="showFlag">
    <header><span class="icon-back" @click="back()"></span>Orders</header>
    <div class="not-order">You don't have any orders</div>
  </div>
</template>
<script>
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
      }
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
  .not-order{
    text-align: center;
    height: 100%;
    line-height: 80vh;
  }
</style>
