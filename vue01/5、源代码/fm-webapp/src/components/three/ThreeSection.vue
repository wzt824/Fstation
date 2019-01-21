<template>
    <section>
      <section-banner :bann="banner.swiper03"></section-banner>
      <section-two-nav></section-two-nav>
      <section-two-pai></section-two-pai>
      <section-intro-list :intro="intros.child"></section-intro-list>
      <section-intro-list :intro="intros.recommend"></section-intro-list>
    </section>
</template>

<script>

  import SectionBanner from "../index/SectionBanner";
  import BannerApisServer from "../../apis/BannerApis";
  import IntroApisServer from "../../apis/introApis";
  import Swiper  from "../../../static/swiper.min.js";
  import SwiperCss  from "../../../static/swiper.min.css";
  import SectionTwoNav from "./SectionTwoNav";
  import SectionTwoPai from "./SectionTwoPai";
  import SectionIntroList from "../index/SectionIntroList";
    export default {
        name: "TwoSection",
      components:{
        SectionIntroList,
        SectionTwoPai,
        SectionTwoNav,
        SectionBanner,
        SwiperCss
      },
      data() {
        return {
          banner: [],
          intros: []
        }
      },
      methods: {
        _initBannerData(){
          BannerApisServer.getBannerData(data=>{
            this.banner = data
            console.log(this.banner)
            this.$nextTick(()=>{
              var mySwiper = new Swiper('#banner', {
                autoplay: {
                  delay: 1500,
                  disableOnInteraction: true,
                },
                clickable :true,
                spaceBetween : 20,
                watchSlidesProgress : true,
                watchSlidesVisibility : true,
                pagination: {
                  el: '.swiper-pagination',
                }
              })
            })
          })
        },
        _initIntroData() {
          IntroApisServer.getIntroData(data => {
            this.intros = data
            console.log(this.intros)
          })
        }
      },

      created() {
        //首页加载数据

        this._initBannerData(),

        this._initIntroData()
      },
      // mounted(){
      //   var mySwiper = new Swiper('#banner', {
      //     autoplay: {
      //       delay: 1500,
      //       disableOnInteraction: true,
      //     },
      //     clickable :true,
      //     spaceBetween : 20,
      //     watchSlidesProgress : true,
      //     watchSlidesVisibility : true,
      //     pagination: {
      //       el: '.swiper-pagination',
      //     }
      //   })
      // }
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow: auto;
  }
</style>
