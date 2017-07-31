<template>
  <div class="packagesend" v-show="showFlag">
    <header><span class="icon-back" @click="back()"></span>Print Now</header>
    <div class="order">
      <div class="number">
        <span class="left">Order Number</span>
        <span class="right">212211211</span>
      </div>
      <div class="date">
        <span class="left">Order Date</span>
        <span class="right">5/7 12:20:12</span>
      </div>
      <div class="price">
        <span class="left">Order Price</span>
        <span class="right">212211211</span>
      </div>
    </div>
    <span @click="ok()" class="ok">OK</span>
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
      },
      ok () {
        this.showFlag = false
      }
    }
  }
</script>
<style scoped>
  .packagesend {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 30;
    color: #ffffff;
    text-align: center;
    background-color: lightseagreen;
  }
  header{
    height: 40px;
    line-height:40px;
    text-align: center;
    font-weight: 500;
    font-size:20px;
    z-index: 500;
  }
  .icon-back {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  .order{
    margin-top: 80px;
    width: 100%;
  }
  .order div {
    margin-bottom: 20px;
  }
  .left{
    display: inline-block;
    width: 60%;
    text-align: left;
  }
  .ok{
    display: inline-block;
    width: 100%;
    font-size: 20px;
    height: 80px;
    line-height: 80px;
    background-color: rgba(0,0,0,0.1);
    position: absolute;
    bottom: 0;
    left: 0;

  }

</style>
