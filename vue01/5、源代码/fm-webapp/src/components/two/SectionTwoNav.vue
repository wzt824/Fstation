<template>
  <ul>
    <li>历史</li>
    <li>历史</li>
    <li>历史</li>
    <li>历史</li>
    <li>历史</li>
    <li>历史</li>
    <li>历史</li>
    <li>历史</li>
  </ul>
</template>

<script>
    export default {
        name: "SectionTwoNav"
    }
</script>

<style lang="scss" scoped>
  ul{
    box-sizing: border-box;
    background-color: #ffffff;
    overflow: hidden ;
    margin-bottom: .13rem;
    li{
      float: left;
      box-sizing: border-box;
      width: 25%;
      padding: .22rem 0;
      text-align: center;
      font-size: .2rem;
      color: #333333;
      border-right: 1px solid #efefef;
      border-bottom: 1px solid #efefef;
    }
    :nth-child(4n){
      border-right: 0;
    }
  }
</style>
