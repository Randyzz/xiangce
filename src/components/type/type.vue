<template>
  <div v-show="showFlag" class="type">
    <header>
      <span class="icon-back" @click="back()"></span>
      Type
    </header>
      <ul class="sort" ref="sort">
        <li v-for="(child1,index) in this.item.children" class="type_item" :class="{'active':currentIndex === index}"
            @click="selectItem(index,child1.children[0])">
          {{child1.name}}
        </li>
      </ul>
    <div v-for="pic in this.item.children">
      <img @click="" v-for="item in pic.images" :src="'http://104.250.140.74:8000/media/image/'+item.path" alt="">
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      item: {
        type: Object
      }
    },
    data () {
      return {
        showFlag: false,
        currentIndex: 0,
        showView: ''
      }
    },
    methods: {
      show () {
        this.showFlag = true
      },
      back () {
        this.showFlag = false
      },
      selectItem (i, v) {
        this.currentIndex = i
        this.showView = v
      }
    }
  }
</script>
<style scoped>
  .type {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 50px;
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
  .type .sort{
    height: 40px;
    display: flex;
  }
  .type_item{
    text-align: center;
    line-height: 40px;
    flex: 1;
  }
  .active{
    background-color: lightseagreen;
    color: #fff;
  }
  .type img{
    width: 100%;
    margin-bottom: 10px;
  }
</style>
