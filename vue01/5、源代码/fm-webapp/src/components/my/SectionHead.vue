<template>
    <div class="head">
      <div class="people">
        <img src="../../../static/image/ts01.jpg" alt="" class="ts">
        <div class="people-cen">
          <div class="cen-top">
            <h3>maiomaomiao </h3>
            <img src="../../../static/image/hg.jpg" alt="">
            <span>2积分</span>
          </div>
          <div class="cen-bot">
            <p>积分商城伤心啦，快来看看吧</p>
          </div>
        </div>
        <div class="people-ri">
          <span><img src="../../../static/image/dui.jpg" alt=""></span>
          <div class="intro">
            <h3>签到有礼</h3>
            <h4>+2积分</h4>
          </div>
        </div>
      </div>
      <ul>
        <li><img src="../../../static/image/gr01.jpg" alt=""><span>蜻蜓币</span></li>
        <li><img src="../../../static/image/gr02.jpg" alt=""><span>蜻蜓币</span></li>
        <li><img src="../../../static/image/gr01.jpg" alt=""><span>蜻蜓币</span></li>
        <li><img src="../../../static/image/gr01.jpg" alt=""><span>蜻蜓币</span></li>
      </ul>
      <div class="super">
        <div class="tit"><img src="../../../static/image/gr05.jpg" alt="">超级会员</div>
        <div class="free">免费畅听万本有声书 <img src="../../../static/image/bjt.jpg" alt=""></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SectionHead"
    }
</script>

<style lang="scss" scoped>
  .head{
    background-color: #282737;
    position: relative;
    .people{
      padding-left: .25rem;
      margin-bottom: .39rem;
      padding-top: .2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .ts{
        width: .90rem;
        height: .90rem;
        border-radius: 50%;
      }
      .people-cen{
        .cen-top{
          display: flex;
          align-items: center;
          h3{
            font-size: .2rem;
            color: #ffffff;
          }
          img{
            width:.35rem;
            height: .25rem;
            margin: 0 .15rem;
          }
          span{
            font-size: .12rem;
            color: #fd5353;
            padding: .06rem .1rem;
            border: 1px solid #fd5353;
            border-radius: .05rem;

          }
        }
        .cen-bot{
          p{
            font-size: .15rem;
            color: #fcfcfc;
            line-height: .3rem;
          }
        }
      }
      .people-ri{
        display: flex;
        align-items: center;
        background-color: #fd5353;
        border-top-left-radius: .3rem;
        border-bottom-left-radius: .3rem;
        height: .5rem;
        padding: 0 .23rem 0 .08rem;
        span{
          padding: .08rem;
          border: 1px solid #ffffff;
          border-radius: 50%;
          img{
            width: .19rem;
            height: .19rem;
          }
        }
        .intro{
          h3{
            font-size: .15rem;
            color: #ffffff;
          }
          h4{
            font-size: .13rem;
            color: #ffffff;
          }
        }
      }
    }
  }

  ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: .55rem;
    li{
      display: flex;
      flex-direction: column;
      img{
        width: .39rem;
        height: .4rem;
        margin-bottom: .1rem;
      }
      span{
        font-size: .15rem;
        color: #908f97;
      }
    }
  }
  .super{
    width: 4.95rem;
    border-radius: .1rem;
    box-sizing: border-box;
    margin: .25rem .25rem 0 .25rem;
    padding: .25rem;
    background-color: #f1dfbb;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 0;
    bottom: -.5rem;
    .tit{
      display: flex;
      align-items: center;
      font-size: .2rem;
      color: #333333;
      img{
        width: .4rem;
        height: .35rem;
      }
    }
    .free{
      display: flex;
      align-items: center;
      font-size: .13rem;
      color: #333333; ;
      img{
        width: .08rem;
        height: .14rem;
      }
    }
  }
</style>
