<template>
  <div class="orders" v-show="showFlag">
    <header><span class="icon-back" @click="back()"></span>Password <span class="done">Done</span></header>
    <div class="reset">
      <input class="bot-line" type="password" placeholder="Current password">
      <input type="password" placeholder="New password">
    </div>
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
    text-align: center;
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
  .done{
    position: absolute;
    right: 10px;
    top: 0;
  }
  .reset{
    padding:15px 0;
    text-align: right;
    border-bottom: 1px solid #ccc;
  }
  .reset input {
    width: 250px;
    height: 40px;
    outline: none;
    font-size: 20px;
  }
  .bot-line{
    border-bottom: 1px solid #bfbfbf;
  }
  ::-webkit-input-placeholder{
    color: #bfbfbf;
    font-size: 18px;
  }

</style>
