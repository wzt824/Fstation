<template>
  <section class="good-tj">
    <div class="title">
      <h3>推荐搭配</h3>
    </div>
    <div class="swiper">
      <div class="swiper-container goods">
        <ul class="swiper-wrapper">
          <li class="swiper-slide" v-for="(p,index) in swiperpro">
              <a href="#">
                <div class="img-box">
                  <img :src="p.pic" alt="">
                </div>
                <p class="p-name"><span>{{p.titles}}</span></p>
                <p class="p-price"><span>￥{{p.price}}</span></p>
                <div class="jia">
                  <img src="../../../static/image/jia.jpg" alt="">
                </div>
              </a>
          </li>
        </ul>
        <!-- Add Pagination -->
        <!--<div class="swiper-pagination"></div>-->
      </div>
    </div>
  </section>
</template>

<script>
  import ShopApisServer from "../../apis/ShopswiperApis";

  import Swiper  from "../../../static/swiper.min.js";
  import SwiperCss  from "../../../static/swiper.min.css";
    export default {
      name: "ShopcartSwiper",
      components:{
        SwiperCss
      },
      data(){
        return{
          swiperpro:[]
        }
      },
      methods:{
        _initSwiperData(){
          ShopApisServer.getShopswiperData(data => {
            this.swiperpro = data
            console.log(this.swiperpro)

            this.$nextTick(()=>{
              var swiper = new Swiper('.swiper-container', {
                slidesPerView: 3,
                autoplay:true,
                loop:true,
                spaceBetween: 30,

                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }
              })
            })

          })
        }
      },
      created(){
        this._initSwiperData()
      }
    }
</script>

<style lang="scss" scoped>

  .swiper{
    width: 100%;
    height: 2rem;
    background: #fff;
    margin-bottom: 60px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
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

  .good-tj{

    width: 100%;
    margin-bottom: .07rem;
    display: -webkit-flex;
    flex-direction: column;
    .title{
      padding-left: .18rem;
      background-color: #ffffff;
      margin-bottom: .01rem;
      h3{
        color: #909090;
        font-weight: 100;
        font-size: .14rem;
        line-height: .38rem;
      }
    }
  }


  .goods{
    ul{
      display: -webkit-flex;
      li{
        width: 1.56rem;
        padding: .2rem 0 .12rem;
        margin-right: .01rem;
        background-color: #ffffff;
        a{
          position: relative;
          width: 1.56rem;
          display: -webkit-flex;
          -webkit-align-items: center;
          flex-direction: column;
          .img-box{
            width: .85rem;
            height: .75rem;
            img{
              width: .85rem;
              height: .75rem;
            }
          }
          .p-name{
            width: .95rem;
            color: #3f3f3f;
            font-size: .14rem;
            line-height: .3rem;
            margin-top: .08rem;
            display: -webkit-flex;
          }
          .p-price{
            font-size: .11rem;
            color: #c8141d;
          }
          .jia{
            position: absolute;
            right:.1rem;
            top:-.1rem;
            width: .25rem;
            height: .25rem;
            border: .01rem solid #cdcdcd;
            border-radius: 50%;
            display: -webkit-flex;
            -webkit-align-items: center;
            -webkit-justify-content: center;
            img{
              width: .12rem;
              height: .12rem;
            }
          }
        }
      }
    }
  }
</style>
