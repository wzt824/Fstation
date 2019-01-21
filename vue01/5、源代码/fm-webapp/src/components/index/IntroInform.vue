<template>
    <div class="every-child">
      <img :src="initem.pic" alt="">
      <div class="intro">
        <div class="left">
          <h2><span>{{initem.vips}}</span>{{initem.title}}</h2>
          <p>{{initem.intro}}</p>
          <div class="bot">
            <span><img src="../../assets/images/bs.jpg" alt="">{{initem.plays}}</span>
            <span><img src="../../assets/images/sl.jpg" alt="">{{initem.world}}</span>
          </div>
        </div>
        <span class="shouc">{{initem.recom}}</span>
      </div>
    </div>
</template>

<script>

    export default {
        name: "IntroInform",
      props:["initem"]
    }
</script>

<style lang="scss" scoped>
  .every-child{
    display: flex;
    img{
      width: .97rem;
      height: .97rem;
    }
    .intro{
      width: 100%;
      margin-left: .2rem;
      padding-bottom: .35rem;
      border-bottom: 1px solid #eeeeee;
      margin-bottom: .25rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left{
        h2{
          font-size: .2rem;
          color: #616161;
          display: flex;
          span{
            display: block;
            padding: .04rem;
            margin-right: .13rem;
            background-color: #f7dbb3;
            border-radius: .1rem 0 .1rem;
          }
        }
        p{
          font-size: .15rem;
          line-height: .35rem;
          color: #e3e3e3;
          width: 2.6rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .bot{
          display: flex;
          span{
            display: flex;
            align-items: center;
            font-size: .16rem;
            color: #e3e3e3;
            margin-right: .35rem;
            img{
              width: .14rem;
              height: .16rem;
              margin-right: .07rem;
            }
          }
        }
      }

    }
  }
  .shouc{
    padding: .15rem .32rem;
    background-color: #feeeee;
    color:#fd5353 ;
    border-radius:.25rem ;
    font-size: .16rem;
    text-align: center;
  }
</style>
