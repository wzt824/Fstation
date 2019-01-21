<template>
  <div class="js">
    <div class="input">
      <input type="checkbox" class="allcheck" @click="changes($event)">
    </div>
    <div class="total">
      <p class="qx">全选</p>
      <div class="all">
        <p>总计 <span class="allprice">￥：{{tmmm}}</span></p>
        <a href="" class="pay">结算:{{tnnn}}</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopcartFooter",
      props:["tmmm","tnnn"],
      methods:{
        changes(e){
          this.$emit("changess",e)
        }
      }
    }
</script>

<style lang="scss" scoped>
  .js{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: .75rem;
    background-color: #f5f5f7;
    z-index: 1000;
    height: .6rem;
    padding-left: .25rem;
    border-top: .01rem solid #eaeaea;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    -webkit-align-items: center;
    .input{
      width: .4rem;
      display: -webkit-flex;
      .allcheck{
        width: .23rem;
        height: .23rem;
        border: .02rem solid #cbcbcb;
      }
    }
    .total{
      width: 100%;
      display: -webkit-flex;
      -webkit-justify-content: space-between;
      -webkit-align-items: center;
      .qx{
        color: #333333;
        font-size: .16rem;
      }
      .all{
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        -webkit-align-items: center;
        p{
          color: #333333;
          font-size: .16rem;
          span{
            color: #c9141d;
            font-size: .16rem;
          }
        }
        .pay{
          width:1.35rem ;
          height: .6rem;
          display: block;
          line-height: .6rem;
          background-color: #c9141d;
          font-size: .19rem;
          color: #ffffff;
          text-align: center;

        }
      }
    }
  }
</style>
