<template>
  <section>
    <section-banner :bann="banner.swiper01"></section-banner>
    <section-nav></section-nav>
    <section-listen-list></section-listen-list>
    <section-now-list :now="storys.story"></section-now-list>
    <section-intro-list :intro="intros.child"></section-intro-list>
    <section-play-list :play="plays.zhibo"></section-play-list>
    <section-now-list :now="storys.xiangs"></section-now-list>
    <section-vip></section-vip>
    <section-intro-list :intro="intros.book"></section-intro-list>
  </section>
</template>

<script>
  import IntroApisServer from "../../apis/introApis";
  import StoryApisServer from "../../apis/StoryApis";
  import PlayApisServer from "../../apis/PlayApis";
  import BannerApisServer from "../../apis/BannerApis";
  import Swiper  from "../../../static/swiper.min.js";
  import SwiperCss  from "../../../static/swiper.min.css";

    import SectionBanner from "./SectionBanner";
    import SectionNav from "./SectionNav";
    import SectionPlayList from "./SectionPlayList";
    import SectionIntroList from "./SectionIntroList";
    import SectionNowList from "./SectionNowList";
    import SectionVip from "./SectionVip";
    import SectionListenList from "./SectionListenList";
    export default {
      name: "IndexSection",
      components: {
        SectionBanner,
        SectionListenList,
        SectionVip,
        SectionNowList,
        SectionIntroList,
        SectionPlayList,
        SectionNav,
        SwiperCss
      },
      data() {
        return {
          intros: [],
          storys: [],
          plays: [],
          banner: []
        }
      },
      methods: {
        _initIntroData() {
          IntroApisServer.getIntroData(data => {
            this.intros = data
            console.log(this.intros)
          })
        },
        _initStoryData() {
          StoryApisServer.getStoryData(data => {
            this.storys = data
            console.log(this.storys)
          })
        },
        _initPlayData() {
          PlayApisServer.getPlayData(data => {
            this.plays = data
            console.log(this.plays)
          })
        },
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
        }
      },


      created() {
        //首页加载数据
        this._initIntroData()

        this._initStoryData()

        this._initPlayData()

        this._initBannerData()
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
