<template>
  <header>
      <div class="swiper-container" id="nav">
        <ul class="swiper-wrapper">
          <li class="swiper-slide"><a href="javascript:;">推荐</a></li>
          <li class="swiper-slide"><a href="">情感</a></li>
          <li class="swiper-slide"><a href="">脱口秀</a></li>
          <li class="swiper-slide"><a href="">小说</a></li>
          <li class="swiper-slide"><a href="">直播</a></li>
          <li class="swiper-slide"><a href="">相声小品</a></li>
          <li class="swiper-slide"><a href="">小说</a></li>
          <li class="swiper-slide"><a href="">直播</a></li>
          <li class="swiper-slide"><a href="">相声小品</a></li>
        </ul>
      </div>
  </header>
</template>

<script>
    export default {
        name: "VipHeader"
    }
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: .55rem;
    padding: 0 .22rem;
    box-sizing: border-box;
    background-color: #282737;
  }

  #nav{
    width: 100%;
    .swiper-wrapper{
      height: .55rem;
      .swiper-slide{
        white-space: nowrap;
        line-height: .55rem;
        margin-right: .3rem;
        a{
          display: block;
          color: #ececec;
          font-size: .17rem;
        }
      }
    }
  }

  .swiper-slide-active{
    color: #ffffff;
    font-size: .22rem;
    border-bottom: 2px solid #fff;
  }
</style>
