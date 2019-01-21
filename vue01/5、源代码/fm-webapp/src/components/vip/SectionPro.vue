<template>
  <div class="group vip">
    <list-title></list-title>
    <div class="vip-nav">
      <ul>
        <li>
          <img src="../../../static/image/dk01.jpg" alt="">
          <h3>小说免费听</h3>
          <h4>海量书库</h4>
        </li>

        <li>
          <img src="../../../static/image/dk02.jpg" alt="">
          <h3>小说免费听</h3>
          <h4>海量书库</h4>
        </li>

        <li><img src="../../../static/image/dk03.jpg" alt=""><h3>小说免费听</h3>
          <h4>海量书库</h4></li>

        <li><img src="../../../static/image/dk04.jpg" alt=""><h3>小说免费听</h3>
          <h4>海量书库</h4></li>
      </ul>
    </div>
    <p><span>专题</span>开通超级会员，免费畅听</p>
  </div>
</template>

<script>
  import ListTitle from "../index/ListTitle";
  export default {
    name: "SectionVip",
    components: {ListTitle}
  }
</script>

<style lang="scss" scoped>
  .vip-nav{
    margin-top: .14rem;
    padding: .17rem 0;
    border: 1px solid #efefef;
    ul{
      display: flex;
      justify-content: space-between;
      align-items: center;
      li{
        padding: .25rem .1rem;
        background-color: #fef7ed;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          width: .45rem;
          height: .45rem;
        }
        h3{
          color: #947348;
          font-size: .2rem;
          line-height: .3rem;
          margin-top: .17rem;
        }
        h4{
          color: #b69971;
          font-size: .17rem;
        }
      }
    }

  }

  p{
    color: #4a4a4a;
    font-size: .15rem;
    margin-top: .15rem;
    span{
      border-radius: .03rem;
      color: #ffffff;
      background-color: #fd5353;
      padding: .06rem .08rem;
      margin-right: .15rem;
    }
  }
</style>
