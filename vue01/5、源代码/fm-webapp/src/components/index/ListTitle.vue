<template>
  <div class="title">
    <h1>直播</h1>
    <span>查看更多&nbsp;&nbsp;></span>
  </div>
</template>

<script>
    export default {
        name: "ListTitle"
    }
</script>

<style lang="scss" scoped>
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  h1{
    font-size: .2rem;
    color: #000000;
  }
  span{
    font-size: .2rem;
    color: #999999;
  }
  }
</style>
