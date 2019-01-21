<template>
  <header>
    <span>购物车 <span>{{tn}}</span></span><span>编辑</span>
  </header>
</template>

<script>
    export default {
        name: "ShopcartHeader",
      props:["tn"]
    }
</script>

<style lang="scss" scoped>
  header{
    display: -webkit-flex;
    height: .55rem;
    padding:0 .25rem;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    span{
      color: #333333;
      font-size: .2rem;
    }
  }
  header span:nth-of-type(1){
    position: relative;
  }
  header span:nth-of-type(1) span{
    position: absolute;
    display: block;
    background: #c5161d;
    color: #fff;
    border-radius: 50%;
    font-size: 15px;
    width: .25rem;
    top: 0px;
    left: 44px;
    line-height: .25rem;
    text-align: center;
  }
</style>
