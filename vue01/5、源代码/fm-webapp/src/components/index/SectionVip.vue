<template>
  <div class="group">
    <img src="../../assets/images/hy01.jpg" alt="" class="vip">
    <p class="buy-vip">买超级会员，送腾讯影视VIP <i><img src="../../assets/images/false.jpg" alt=""></i></p>
  </div>
</template>

<script>
    export default {
        name: "SectionVip"
    }
</script>

<style lang="scss" scoped>
  .vip{
    width: 5.05rem;
    height: 1.97rem;
  }
  .buy-vip{
    margin-top: .16rem;
    font-size: .2rem;
    i{
      float: right;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      width: .17rem;
      height: .17rem;
      text-align: center;
      line-height: .17rem;
      border: 1px solid #999999;
      img{
        width: .13rem;
        height: .13rem;
      }
    }
  }
</style>
