<template>
  <div class="packagesend" v-show="showFlag">
    <header><span class="icon-back" @click="back()"></span>Being sent</header>
    <p class="arrival">Estimated time of arrival</p>
    <div class="timer" v-model="timer">{{timer}}</div>
    <p class="click">Click express to view Logistics</p>
    <span>RWWLS103042</span>
    <span @click="ok()" class="ok">OK</span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showFlag: false,
        timer: ''
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
    },
    beforeMount () {
      var self = this
      var Len = 1000
      var timer = null
      timer = setInterval(function () {
        Len -= 1
        var min = Math.floor(Len / 60)
        var second = Len % 60
        min < 10 ? min = '0' + min : min
        second < 10 ? second = '0' + second : second
        self.timer = min + ':' + second
        if (Len === 0) {
          clearInterval(timer)
        }
      }, 1000)
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
  .arrival{
    margin-top: 80px;
  }
  .timer{
    margin: 10px 0;
    font-size: 60px;
  }
  .click{
    margin-bottom: 10px;
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
