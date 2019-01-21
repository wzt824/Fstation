<template>
  <ul>
    <li class="every" v-for="(p,ind) in weeks">
      <div class="grad">
        <span class="mm">{{p.mc}}</span>
        <span class="addmin">{{p.add}}</span>
      </div>
      <div class="every-child">
        <img :src="p.pic" alt="">
        <div class="intro">
          <div class="left">
            <h2><span>{{p.vips}}</span>{{p.title}}</h2>
            <p>{{p.intro}}</p>
            <div class="bot">
              <span><img src="../../assets/images/bs.jpg" alt="">{{p.plays}}</span>
              <span><img src="../../assets/images/sl.jpg" alt="">{{p.world}}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>

</template>

<script>
  export default {
    name: "ListEvery",
    props:["weeks"]
  }
</script>

<style lang="scss" scoped>
  .every{
    padding: .15rem;
    display: flex;
    align-items: center;
    .grad{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: .3rem;
      .mm{
        font-size: .3rem;
        color: red;
        margin-bottom: .15rem;
      }
      .addmin{
        font-size: .1rem;
        color: #9c9c9c;
      }
    }

  }

  .every-child{
    display: flex;
    width: 100%;
    img{
      width: .97rem;
      height: .97rem;
    }
    .intro{
      width: 100%;
      margin-left: .2rem;
      padding-bottom: .35rem;
      border-bottom: 1px solid #eeeeee;
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
