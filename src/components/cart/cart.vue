<template>
  <div class="cart">
    <header>
      Shopping Bag
      <span v-show="" class="edit">Edit</span>
    </header>
    <div class="cart-null" v-if="Math.random()>0">
      <span class="icon-cart  big"></span>
      <p class="text">Your Shopping Cart is Empty,<br>Shop now!</p>
      <button class="cart-shop-now" @click="toShop">
        <span class="icon-cart small"></span> SHOP NOW
      </button>
    </div>
    <div class="cart-content" v-else>
      <ul>
        <li v-for="" class="item">
          <div class="img"></div>
          <div class="data">
            <div class="top">
              <span class="col left"></span>
              <span class="sum right">$215</span>
            </div>
            <div class="mid">
              <span class="count left">2</span>
              <span class="icon-del right"></span>
            </div>
            <div class="bott">
              <span class="size left">8x8in</span>
              <span class="name">Photo Books</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="total">
        <span class="total-left">Total</span>
        <span class="total-right">$5.00</span>
      </div>
      <div class="checkout">CHECKOUT</div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      toShop () {
        this.$router.push({path: '/home'})
      }
    }
  }
</script>
<style scoped>
  .cart{
    margin: 5px;
  }
  header{
    height: 40px;
    line-height:40px;
    text-align: center;
    border-bottom:1px solid rgba(7,17,27,0.1);
    font-weight: 500;
    color:#999;
    font-size:18px;
    background: #fff;
    z-index: 500;
  }
  .cart-null {
    margin:100px auto;
    text-align: center;
  }
  .cart-null .big {
    font-size: 80px;
    color: #ccc;
    display: inline-block;
    width: 80px;
    height: 80px;
    margin-bottom: 30px;
  }
  .cart-null .text{
    font-size: 16px;
  }
  .cart-null .cart-shop-now{
    display: inline-block;
    margin-top: 30px;
    height: 40px;
    background-color: #fff;
    padding:6px 60px;
    border-style: solid;
    outline: none;
    font-size: 12px;
  }
  .cart-shop-now .small{
    display: inline-block;
    font-size: 16px;
    color: #000;
  }


  /* 非空购物车*/
  .cart-content{
    height: 80%;
  }
  .item{
    height: 130px;
    padding: 5px;
    text-align: center;
    display: flex;
  }
  .item .img{
    width: 120px;
    height: 120px;
    flex: 0 0 120px;
    background-color: red;
  }
  .data{
    width: 100%;
    display: flex;
    margin-left: 10px;
    flex-direction: column;
  }
  .top span,.mid span,.bott span{
    display: inline-block;
  }
  .top .col{
    width: 30px;
    height: 30px;
    background-color: greenyellow;
  }
  .left{
    float: left;
  }
  .right {
    float: right;
  }
  .top .sum{
    font-size: 25px;
    color: #7e8c8d;
  }
  .mid{
    margin-top: 20px;
  }
  .mid .count{
    width: 29px;
    height: 29px;
    border: 1px solid #000;
    text-align: center;
    line-height: 29px;
  }
  .icon-del{
    font-size: 18px;
  }
  .icon-del:after{
    content: '|';
    position: absolute;
    right: 32px;
    top:98px;
  }
  .bott{
    margin-top: 20px;
  }
  .total{
    width: 94%;
    height: 50px;
    margin: 0 10px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    position: absolute;
    left: 0;
    bottom: 104px;
    background-color: #ccc;
  }
  .total span{
    display: inline-block;
  }
  .total-left{
    width: 60%;
    text-align: right;
  }

  .total-right{
    text-align: center;
    line-height: 50px;
  }
  .checkout{
    width: 94%;
    height: 50px;
    margin: 0 10px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 22px;
    position: absolute;
    left: 0;
    bottom: 52px;
    background-color: lightseagreen;
  }
</style>
