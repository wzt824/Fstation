<template>
    <div class="my-top">
      <div class="everyone">
        <div class="tit">
          <div class="left">
            <img src="../../../static/image/my01.jpg" alt="">
            <h3>我的下载</h3>
          </div>
          <img src="../../../static/image/right.jpg" alt="" class="right">
        </div>
      </div>
      <div class="everyone">
        <div class="tit">
          <div class="left">
            <img src="../../../static/image/my02.jpg" alt="">
            <h3>我的收藏</h3>
          </div>
          <img src="../../../static/image/right.jpg" alt="" class="right">
        </div>
        <ul class="history">
          <li>
            <div class="imgs">
              <img src="../../../static/image/mytj01.jpg" alt="">
              <span></span>
            </div>
            <div class="int">
              <h3>梁知</h3>
              <h4></h4>
            </div>
          </li>
          <li>
            <div class="imgs">
              <img src="../../../static/image/mytj06.jpg" alt="">
              <span></span>
            </div>
            <div class="int">
              <h3>三国演义</h3>
              <h4></h4>
            </div>
          </li>

        </ul>
      </div>
      <div class="everyone">
        <div class="tit">
          <div class="left">
            <img src="../../../static/image/my03.jpg" alt="">
            <h3>我的历史</h3>
          </div>
          <img src="../../../static/image/right.jpg" alt="" class="right">
        </div>
        <ul class="history">
          <li>
            <div class="imgs">
              <img src="../../../static/image/mylis01.jpg" alt="">
              <span>已听73%</span>
            </div>
            <div class="int">
              <h3>千里共良宵-姚科专场</h3>
              <h4>每到丁香花开时</h4>
            </div>
          </li>
          <li>
            <div class="imgs">
              <img src="../../../static/image/mylis01.jpg" alt="">
              <span>已听73%</span>
            </div>
            <div class="int">
              <h3>千里共良宵-姚科专场</h3>
              <h4>每到丁香花开时</h4>
            </div>
          </li>
          <li>
            <div class="imgs">
              <img src="../../../static/image/mylis01.jpg" alt="">
              <span>已听73%</span>
            </div>
            <div class="int">
              <h3>千里共良宵-姚科专场</h3>
              <h4>每到丁香花开时</h4>
            </div>
          </li>
          <li>
            <div class="imgs">
              <img src="../../../static/image/mylis01.jpg" alt="">
              <span>已听73%</span>
            </div>
            <div class="int">
              <h3>千里共良宵-姚科专场</h3>
              <h4>每到丁香花开时</h4>
            </div>
          </li>
        </ul>

      </div>
      <div class="everyone">
        <div class="tit">
          <div class="left">
            <img src="../../../static/image/my04.jpg" alt="">
            <h3>我的已购</h3>
          </div>
          <img src="../../../static/image/right.jpg" alt="" class="right">
        </div>
      </div>
      <div class="everyone">
        <div class="tit">
          <div class="left">
            <img src="../../../static/image/my05.jpg" alt="">
            <h3>关注主播</h3>
          </div>
          <img src="../../../static/image/right.jpg" alt="" class="right">
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "SectionMyListen"
    }
</script>

<style lang="scss" scoped>
  .my-top{
    padding: 0 .2rem;
    background-color: #ffffff;
  }
  .everyone{
    padding:.27rem 0;
    border-bottom: 1px solid #cccccc;
    .tit{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        align-items: center;
        img{
          width: .27rem;
          height: .27rem;
          margin-right: .17rem;
        }
        h3{
          font-size: .2rem;
          color: #c1c1c1;
        }
      }
      .right{
        width: .07rem;
        height: .12rem;
      }
    }
  }

  .history{
    display: flex;
    margin-top: .25rem;
    overflow-x: scroll;
    li{
      display: flex;
      align-items: center;
      margin-right: .2rem;
      .imgs{
        position: relative;
        width: .96rem;
        height: .96rem;
        img{
          width: .96rem;
          height: .96rem;
        }
        span{
          background-color: #3a2f3f;
          font-size: .1rem;
          color:#ffffff ;
          padding: .06rem;
          border-radius: .05rem;
          opacity: .7;
          white-space: nowrap;
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .int{
        width: 1.23rem;
        height: .96rem;
        padding-left: .12rem;
        background-color: #f8f8f8;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
          min-width: .95rem;
          font-size: .17rem;
          color: #666666;
        }
        h4{
          font-size: .13rem;
          color: #9b9b9b;
        }
      }
    }

  }
</style>
