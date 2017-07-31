<template>
  <div class="home" v-show="showOnOff">
    <header>LEPRINT</header>
    <div class="content" ref="home">
      <div class="content-scroll">
        <!--http://104.250.140.74:8000/media/image/fa/ce/c2031d1117203dac9c8832126968.png-->
        <div class="banner"><img :src="this.imgUrl">
        </div>
        <ul class="taxons">
          <li @click="selectType(item,$event)" v-for="item in taxons.children" class="item active" v-show="item.name">
            <img src="" alt="">
            <div class="inner">
              <p class="name">{{item.name}}</p>
              <p>Simply. Love</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <type ref="type" :item="selectedItem"></type>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import type from '../../components/type/type.vue'

  export default {
    props: {
      taxons: {
        type: Object
      }
    },
    components: {
      type
    },
    data () {
      return {
        selectedItem: {},
        showOnOff: true,
        imgUrl: {
          type: Object
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    created () {
      this.$http.get('https://bird.ioliu.cn/v1/?url=http://104.250.140.74:8000/app_dev.php/api/banners/', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.imgUrl = response.data[0].image
        this.imgUrl = 'http://104.250.140.74:8000' + this.imgUrl
      })
    },
    methods: {
      _initScroll () {
        if (!this.homeScroll) {
          this.homeScroll = new BScroll(this.$refs['home'], {
            click: true
          })
          console.log(1)
        } else {
          this.homeScroll.refresh()
        }
      },
      hide () {
        this.showOnOff = false
      },
      selectType (item, event) {
        if (!event._constructed) {
          return
        }
        this.selectedItem = item
//        this.$refs.home.hide()
        this.$refs.type.show()
      }
    }
  }
</script>
<style scoped>
  header{
    height: 40px;
    line-height:40px;
    text-align: center;
    border-bottom:1px solid rgba(7,17,27,0.1);
    font-weight: 500;
    color:#666;
    font-size:18px;
    letter-spacing: 16px;
    background: #fff;
    z-index: 500;
  }
  .content{
    margin:40px 0;
    position: absolute;
    bottom: 0;
    top: 0;
    height: 477px;
    overflow: hidden;
  }
  .content-scroll{
    height: 100vh;
    background-color: #eee;
    overflow: hidden;
  }
  .banner{
    height: 28vh;
  }
  .banner img {
    width: 100%;
    height: 28vh;
  }
  .taxons{
    margin:4px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    /*-webkit-flex-flow:row wrap;*/
  }
  .taxons .item{
    display: block;
    width: 26vh;
    height: 34vh;
    margin: 4px;
    border-radius: 5px;
    background: #ccc;
  }
  .inner{
    margin-top: 26vh;
    padding: 6px 0 0 4px;
  }
  .item .name{
    color: lightseagreen;
    font-size:14px;
  }

</style>
