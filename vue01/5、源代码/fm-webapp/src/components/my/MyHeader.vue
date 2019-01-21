<template>
    <header>
      <div class="xs">
        <img src="../../../static/image/xx01.jpg" alt="">
        <span>39</span>
      </div>
      <h3>个人中心</h3>
      <img src="../../../static/image/sys01.jpg" alt="">
    </header>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style lang="scss" scoped>
  header{
    width: 100%;
    height: .65rem;
    padding: 0 .22rem;
    box-sizing: border-box;
    background-color: #282737;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .xs{
      width: .33rem;
      height: .37rem;
      position: relative;
      img{
        width: .33rem;
        height: .37rem;
      }
      span{
        width: .21rem;
        height: .21rem;
        border-radius: 50%;
        background-color: #fd5353;
        color: #ffffff;
        font-size: .1rem;
        text-align: center;
        line-height: .21rem;
        font-size: .1rem;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
    h3{
      color: #ffffff;
      font-size: .25rem;
    }
    img{
      width: .33rem;
      height: .37rem;
    }
  }

</style>
