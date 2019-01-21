<template>
    <section>
      <section-banner :bann="banner.swiper02"></section-banner>
      <section-open></section-open>
      <section-navvip :navlis="navlist.vip"></section-navvip>
      <section-now-list :now="storys.onelis"></section-now-list>
      <section-pro></section-pro>
      <section-now-list :now="storys.morning"></section-now-list>
      <section-now-list :now="storys.noon"></section-now-list>
      <section-now-list :now="storys.evening"></section-now-list>
    </section>
</template>

<script>
  import BannerApisServer from "../../apis/BannerApis";
  import StoryApisServer from "../../apis/StoryApis";
  import NavApisServer from "../../apis/NavApis";
  import Swiper  from "../../../static/swiper.min.js";
  import SwiperCss  from "../../../static/swiper.min.css";

  import SectionBanner from '../index/SectionBanner';
  import SectionOpen from "./SectionOpen";
  import SectionNavvip from "./SectionNavvip";
  import SectionNowList from "../index/SectionNowList";
  import SectionPro from "./SectionPro";
    export default {
        name: "VipSection",
      components: {
        SectionPro,
        SectionNowList,
        SectionOpen,
        SectionBanner,
        SwiperCss,
        SectionNavvip

      },
      data() {
        return {
          banner: [],
          storys:[],
          navlist:[]
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
        //播放
        _initStoryData() {
          StoryApisServer.getStoryData(data => {
            this.storys = data
            console.log(this.storys)
          })
        },
        _initNavlistData() {
          NavApisServer.getNavlistData(data => {
            this.navlist = data
            console.log(this.navlist)
          })
        },
      },


      created() {

        this._initBannerData()

        this._initStoryData()

        this._initNavlistData()
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
