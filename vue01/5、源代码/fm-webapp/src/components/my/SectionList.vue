<template>
    <div class="list">
      <ul class="every">
        <li>
          <span>夜间模式</span>
          <p><img src="../../../static/image/jt01.jpg" alt=""></p>
        </li>
        <li>
          <span>定时关闭</span>
          <p><img src="../../../static/image/jt01.jpg" alt=""></p>
        </li>
        <li>
          <span>闹钟</span>
          <p><img src="../../../static/image/jt01.jpg" alt=""></p>
        </li>
        <li>
          <span>预约</span>
          <p><img src="../../../static/image/jt01.jpg" alt=""></p>
        </li>
      </ul>
      <ul class="every">
        <li>
          <span>任务中心</span>
          <p><img src="../../../static/image/jt01.jpg" alt=""></p>
        </li>
      </ul>
      <ul class="every">
        <li>
          <span>免流量模式</span>
          <p>限时特惠，不容错过<img src="../../../static/image/jt01.jpg" alt=""></p>
        </li>
      </ul>
      <ul class="every">
        <li>
          <span>我要当主播</span>
          <p>申请成为主播<img src="../../../static/image/jt01.jpg" alt=""></p>
        </li>
      </ul>
      <ul class="every">
        <li>
          <span>帮助与反馈</span>
          <p><img src="../../../static/image/jt01.jpg" alt=""></p>
        </li>
        <li>
          <span>设置</span>
          <p><img src="../../../static/image/jt01.jpg" alt=""></p>
        </li>
      </ul>
      <ul class="every buy">
        <li>
          <span>发现</span>
        </li>
        <li>
          <a><img src="../../../static/image/gr06.jpg" alt="">蜻蜓商城</a>
          <a><img src="../../../static/image/gr07.jpg" alt="">低价买车</a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "SectionList"
    }
</script>

<style lang="scss" scoped>
.list{
  margin:.6rem .25rem;
  border-radius: .1rem;

}
.every{
  margin-top: .15rem;
  padding-left: .25rem;
  background-color: #ffffff;
  border-radius: .1rem;
  li{
    border-bottom: 1px solid #efefef;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding :.27rem .25rem .27rem 0;
    span{
      font-size: .2rem;
      color: #333333;
    }
    p{
      font-size: .15rem;
      color: #999999;
      display: flex;
      align-items: center;
      img{
        width: .09rem;
        height: .15rem;
        margin-left: .12rem;
      }
    }

  }
  li:last-child{
    border: 0;
  }

}
.buy{
  li{
    display: flex;
    align-items: center;
    justify-content: left;
    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: .16rem;
      color: #bababa;
      margin-right: .6rem;
      img{
        width: .35rem;
        height: .4rem;
        margin-bottom: .18rem;
      }
    }
  }
}

</style>
