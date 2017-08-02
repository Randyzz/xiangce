<template>
  <div class="home" v-show="showOnOff">
    <header>LEPRINT</header>
    <div class="content" ref="home">
      <div class="content-scroll">
        <!--http://104.250.140.74:8000/media/image/fa/ce/c2031d1117203dac9c8832126968.png-->
        <!--<div class="banner"><img :src="this.imgUrl">-->
        <!--</div>-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners"><img :src="'http://104.250.140.74:8000'+banner.image" alt=""></div>
          </div>
        </div>
        <ul class="taxons">
          <li @click="selectType(item,$event)" v-for="item in taxons.children" class="item active" v-show="item.name">
            <img :src="'http://104.250.140.74:8000/media/image/'+item.images[0].path" alt="">
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
  import Swiper from '../../../static/js/swiper.min'
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
        banners: {
          type: Object
        }
      }
    },
    mounted () {
      this.$nextTick(() => {
        this._initScroll()
      })
      this.lunbo()
    },
    created () {
      this.$http.get('https://bird.ioliu.cn/v1/?url=http://104.250.140.74:8000/app_dev.php/api/banners/', {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.banners = response.data
      })
    },
    methods: {
      _initScroll () {
        if (!this.homeScroll) {
          this.homeScroll = new BScroll(this.$refs['home'], {
            click: true
          })
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
      },
      lunbo () {
        var swiper = new Swiper('.swiper-container', {
          paginationClickable: true,
          speed: 1000,
          observer: true,
          autoplay: 1500
        })
        swiper.hasOwnProperty()
      }
    }
  }
</script>
<style scoped>
  @import "../../../static/css/swiper.min.css";
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
    width: 100%;
    margin:40px 0;
    position: absolute;
    bottom: 0;
    top: 0;
    height: 84vh;
    overflow: hidden;
  }
  .content-scroll{
    height: 110vh;
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
  .item img{
    width: 100%;
    height: 34vh;
  }
.swiper-slide img{
  width: 100%;
  height: 28vh;
}
  .swiper-container {
    width: 100%;
    height: 28vh;
    margin: 0 auto;
  }
  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
