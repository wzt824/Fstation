<template>
  <div class="box">
    <vip-header></vip-header>
    <vip-section></vip-section>
    <index-footer></index-footer>
  </div>
</template>

<script>
    import VipHeader from "../components/vip/VipHeader";
    import IndexFooter from "../components/IndexFooter";
    import VipSection from "../components/vip/VipSection";
    import Swiper  from "../../static/swiper.min.js";
    import SwiperCss  from "../../static/swiper.min.css";
    export default {
        name: "Vip",
      components: {VipSection, IndexFooter, VipHeader,Swiper,SwiperCss},
      mounted(){
        var swiper = new Swiper('#nav', {
          slidesPerView: 7,
          spaceBetween: 30,
        })
      }
    }
</script>

<style scoped>
  .box{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
