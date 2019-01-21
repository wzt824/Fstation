<template>
    <div class="swiper-container" id="banner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(p,index) in bann">
          <img :src="p.pic" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    export default {
      name: "SectionBanner",
      props:["bann"]
    }
</script>

<style lang="scss" scoped>
  #banner{
    width: 100%;
    height: 1.92rem;
    img{
      width: 100%;
      height: 1.92rem;
    }
  }
  .swiper-pagination-bullet-active{
    color: #ffffff;
    background-color: #ffffff!important;
  }
  .swiper-pagination-bullet{
    width: .08rem!important;
    height: .08rem!important;
    margin: 0 .1rem!important;
    margin-bottom: .2rem!important;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets{
    bottom: .2rem!important;
    left: -1.8rem!important;
  }


</style>


