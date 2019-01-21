<template>
  <div class="group sec-nav">
    <a href="">
      <img src="../../assets/images/n01.jpg" alt="">
      <span>小说</span>
    </a>
    <a href="">
      <img src="../../assets/images/n02.jpg" alt="">
      <span>直播</span>
    </a>
    <a href="">
      <img src="../../assets/images/n03.jpg" alt="">
      <span>广播</span>
    </a>
    <a href="">
      <img src="../../assets/images/n04.jpg" alt="">
      <span>必听榜单</span>
    </a>
    <a href="">
      <img src="../../assets/images/n05.jpg" alt="">
      <span>倾听甘肃</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "SectionNav"
    }
</script>

<style lang="scss" scoped>
  .sec-nav{
    height: 1.25rem;
    padding: 0 .35rem;
    background: #ede7d9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
      display: flex;
      flex-direction: column;
      align-items: center;

      img{
        border-radius: 50%;
        width: .55rem;
        height: .55rem;
      }
      span{
        padding-top: .13rem;
        font-size: .16rem;
        color: #000000;
      }
    }
  }
</style>
