<template>
  <div class="group sec-nav">
    <ul class="nav">
      <li v-for="(p,index) in navlis.nav">
        <img :src="p.pic" alt="">
        <span>{{p.title}}</span>
      </li>
    </ul>
    <div class="nav-bot">
      <div class="every" v-for="(p1,index1) in navlis.new">
        <img :src="p1.pic" alt="">
        <div class="tit">
          <h3>{{p1.title}}</h3>
          <h4>{{p1.intro}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SectionNav",
    props:["navlis"],


  }
</script>

<style lang="scss" scoped>
  .sec-nav{
    background-color: #ffffff;
    .nav{
      display: flex;
      justify-content: space-around;
      align-items: center;
      li{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
          border-radius: 50%;
          width: .43rem;
          height: .43rem;
        }
        span{
          padding-top: .23rem;
          font-size: .14rem;
          color: #000000;
        }
      }
    }
    .nav-bot{
      padding: .18rem 0;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .every{
        width: 2.1rem;
        padding: .12rem .15rem;
        background-color: #faf3e9;
        border: 1px solid #f0efeb;
        border-radius: .08rem;
        display: flex;
        align-items:center;
        img{
          width: .72rem;
          height: .72rem;
          margin-right: .15rem;
        }
        .tit{
          h3{
            color:#6d4b1b;
            font-size: .22rem;
            line-height: .33rem;
          }
          h4{
            color: #ae9c86;
            font-size: .16rem;
            line-height: .3rem;
          }
        }
      }
    }
  }
</style>
