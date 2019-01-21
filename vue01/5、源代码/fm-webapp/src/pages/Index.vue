<template>
    <div class="box">
      <index-header></index-header>
      <index-section></index-section>
      <index-footer></index-footer>
    </div>
</template>

<script>
    import Iconfont from "../assets/css/iconfont.css";
    import Public from "../assets/css/public.css";
    import TwoSection from "../components/two/TwoSection"
    import IndexFooter from "../components/IndexFooter";
    import Swiper  from "../../static/swiper.min.js";
    import SwiperCss  from "../../static/swiper.min.css";
    import IndexHeader from "../components/index/IndexHeader";
    import IndexSection from "../components/index/IndexSection";
    export default {
      name: "Index",
      components: {
        IndexSection,
        IndexHeader,
        IndexFooter,
        TwoSection,
        Iconfont,
        Public,
        SwiperCss
      }
      // mounted(){
      //   var swiper = new Swiper('#nav', {
      //     slidesPerView: 7,
      //     spaceBetween: 30,
      //   })
      // }

    }
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
