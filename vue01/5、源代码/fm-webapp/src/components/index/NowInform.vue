<template>
  <li>
    <a href="">
      <img :src="noitem.pic" alt="">
      <span>{{noitem.num}}</span>
    </a>
    <p>{{noitem.title}}</p>
  </li>
</template>

<script>
    export default {
      name: "NowInform",
      props:["noitem","noind"]
    }
</script>

<style lang="scss" scoped>

  li{
    float: left;
    width: 33.3%;
    padding-bottom: .25rem;
    a{
      position: relative;
      img{
        width: 1.6rem;
        height: 1.6rem;
      }
      span{
        font-size: .16rem;
        color: #ffffff;
        position: absolute;
        left: .07rem;
        bottom: .07rem;
      }
    }
    p{
      width: 1.5rem;
      margin-top: .12rem;
      font-size: .15rem;
      color: #999999;
    }
  }
</style>
