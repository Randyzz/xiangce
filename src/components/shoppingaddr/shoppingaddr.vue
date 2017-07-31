<template>
  <div class="orders" v-show="showFlag">
    <header>
      <span class="icon-back" @click="back()"></span>
      Shopping Address
      <span class="save">Save</span>
    </header>
    <form action="" class="form">
      <div class="name">
        <span><input type="text" title="First Name" placeholder="First Name"></span>
        <span><input type="text" title="Last Name" placeholder="Last Name"></span>
      </div>
      <div class="address">
        <input type="text" title="address" placeholder="Address">
      </div>
      <div class="city">
        <input type="text" title="City" placeholder="City">
      </div>
      <div class="local">
        <option value=""></option>
      </div>
      <div class="zipAndNum">
        <span><input type="text" title="Zip" placeholder="Zip"></span>
        <span><input type="number" title="Phone Number" placeholder="Phone Number"></span>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showFlag: false,
        addr: {
          type: Object
        }
      }
    },
    methods: {
      show () {
        this.showFlag = true
      },
      back () {
        this.showFlag = false
      }
    },
    created () {
      this.$http.jsonp('https://bird.ioliu.cn/v1/?url=http://104.250.140.74:8000/app_dev.php/api/countries/').then((response) => {
        this.addr = response.data
        console.log(this.addr)
      })
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
    top: 12px;
  }
  .save{
    position: absolute;
    right: 10px;
    top: 0;
  }
  .name,.zipAndNum{
    display: flex;
  }
  .name span,.zipAndNum span{
    display: inline-block;
    padding:10px;
    flex: 1;

  }
  .name input,.zipAndNum input {
    width: 140px;
    height: 30px;
    outline:none;
    font-size:18px;
    border-bottom:1px solid #ccc;
  }
  ::-webkit-input-placeholder{
    font-weight: bold;

  }
</style>
