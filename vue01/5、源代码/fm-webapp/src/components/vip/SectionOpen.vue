<template>
    <div class="group open">
      <div class="open-left">
        <img src="../../../static/image/ts01.jpg" alt="">
        <h3>开通超级会员，免费畅听</h3>
      </div>
      <span>开通</span>
    </div>
</template>

<script>
    export default {
        name: "SectionOpen"
    }
</script>

<style lang="scss" scoped>
  .open{
    padding: .15rem .19rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .2rem;
    background-color: #ffffff;
    .open-left{
      display: flex;
      align-items: center;
      img{
        width: .72rem;
        height: .72rem;
        border-radius: 50%;
        margin-right: .16rem;
      }
      h3{
        color: #666666;
      }
    }
    span{
      padding: .13rem .32rem;
      background-color: #e3c28f;
      color: #704b16;
      text-align: center;
      border-radius: .27rem;
    }
  }
</style>
