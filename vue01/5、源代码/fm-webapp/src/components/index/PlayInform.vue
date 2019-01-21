<template>
  <div class="play-every">
    <div class="e-img">
      <img :src="plitem.pic" alt="">
      <span>{{plitem.num}}</span>
    </div>
    <h3>{{plitem.title}} <span>{{plitem.tit}}</span></h3>
    <h4>{{plitem.style}}</h4>
  </div>
</template>

<script>
    export default {
        name: "PlayInform",
      props:["plitem","plind"]
    }
</script>

<style lang="scss" scoped>
  .play-every{
    margin-top: .2rem;
    .e-img{
      position: relative;
      img{
        width: 2.45rem;
        height: 1.67rem;
      }
      span{
        position: absolute;
        left: .07rem;
        bottom: .07rem;
        padding: .06rem .2rem;
        line-height: .25rem;
        border-radius: .13rem;
        text-align: center;
        background-color: #d15d68;
        color: #ffffff;
        font-size: .12rem;
      }
    }
    h3{
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #000000;
      font-size: .18rem;
      line-height: .18rem;
      margin: .2rem 0 .15rem 0;
      span{
        padding: .04rem;
        font-size: .14rem;
        color: #c16d6b;
        text-align: center;
        border: 2px solid #c16d6b;
      }
    }
    h4{
      color: #999999;
      font-size: .16rem;
    }
  }
</style>
