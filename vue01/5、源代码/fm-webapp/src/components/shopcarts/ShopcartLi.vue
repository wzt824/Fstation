<template>
  <div>
    <section class="good" v-for="(p,i) in list">
      <div class="good-top">
        <div class="inp">
          <input type="checkbox" @changess="change" :value="i" class="check" v-model="checkData">
        </div>
        <div class="nr">
          <div class="good-img">
            <img :src="p.pic" alt="">
          </div>
          <div class="good-nr">
            <p>{{p.titles}}</p>
            <div class="price-add">
              <div class="price">
                <span class="g-priceb">￥{{p.beforePrice}}</span>
                <span class="g-price">￥{{p.nowprice}}</span>
              </div>

              <div class="num">
                <a class="btn min is-disabled" @click="minus(i)">-
                </a>
                <input type="text" class="num-input" v-model="p.qal"/>
                <a class="btn add" @click="add(i)">+
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="good-cen">
        <div class="cen-left">
          <span>服务</span>
        </div>
        <div class="cen-right">
          <div class="service">
            <p>可选保障服务</p>
          </div>
          <span> > </span>
        </div>
      </div>
      <div class="good-cen">
        <div class="cen-left">
          <span>配</span>
        </div>
        <div class="cen-right">
          <div class="service">
            <img :src="p.picpei" alt="">
            <p>{{p.peitit}}</p>
          </div>
        </div>
      </div>
    </section>
    <shopcart-footer @changess="change" :tmmm="tmm" :tnnn="tnn"></shopcart-footer>
  </div>

</template>

<script>
    import ShopcartFooter from "./ShopcartFooter";
    export default {
        name: "ShopcartLi",
      components: {ShopcartFooter},
      props:["list","tmm","tnn"],
      data(){
          return{
            //已经选中的商品
            checkData:[]
          }
      },
      methods:{
        minus(i) {
          this.$emit("minus", i)
        },
        add(i) {
          this.$emit("add", i)
        },

        change(e){
          if(e.target.checked){
            for(var i=0;i<=$(".check").length;i++){
              if(!$(".check")[i].checked){
                this.checkData.push($(".check")[i].value)
              }
            }
          }else{
            this.checkData=[]
          }
        }
      },

      watch: {
        checkData: {
          handler: function(){
            if (this.checkData.length==this.list.length){
              $(".allcheck")[0].checked =true
            }else{
              $(".allcheck")[0].checked =false
            }
            console.log(this.checkData)
          },
          deep: true
        }
      }
    }
</script>

<style lang="scss" scoped>
  .good{
    background-color: #ffffff;
    margin-bottom: .2rem;
    .good-top{
      padding: .21rem;
      border-bottom: .01rem solid #eaeaea;
      display: -webkit-flex;
      -webkit-align-items: center;
      .inp{
        width: .45rem;
        display: -webkit-flex;
        .check{
          width: .23rem;
          height: .23rem;
          border: .02rem solid #cbcbcb;

        }
      }
      .nr{
        width: 100%;
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        .good-img{
          img{
            width: .88rem;
            height: 1.15rem;
          }
        }
        .good-nr{
          display: -webkit-flex;
          -webkit-flex-direction: column;
          position: relative;
          p{
            letter-spacing: .02rem;
            color:#353535 ;
            font-size: .16rem;
            line-height: .23rem;
            padding-bottom: .25rem;
          }
          .price-add{
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            display: -webkit-flex;
            -webkit-align-items: center;
            -webkit-justify-content: space-between;
            .price{
              display: -webkit-flex;
              -webkit-align-items: center;
              -webkit-justify-content: space-between;
              .g-priceb{
                color: #888888;
                font-size: .05rem;
              }
              .g-price{
                color:#c5161d ;
                font-size: .2rem;
              }
            }

            .num{
              border-radius: .15rem;
              width: 1.32rem;
              height: .35rem;
              background-color: #fff;
              border: 1px solid #e1e1e1;
              color:#333333 ;
              display: -webkit-flex;
              -webkit-align-items: center;
              -webkit-justify-content: space-between;
              .btn{
                box-sizing: border-box;
                width: .4rem;
                height: .35rem;
                text-align: center;
                line-height: .35rem;
                padding: 0 .04rem;
                font-size:.12rem ;
              }
              .num-input{
                width: .25rem;
                height: .35rem;
                line-height: 43px;
                text-align: center;
                border: 0;
                color: #000;
              }
            }
          }
        }
      }

    }
    .good-cen{
      padding:.2rem .25rem;
      border-bottom: .01rem solid #eaeaea;
      display: -webkit-flex;
      -webkit-align-items: center;
      .cen-left{
        width: .45rem;
        display: -webkit-flex;
        color: #888888;
        font-size: .16rem;
      }
      .cen-right{
        width: 100%;
        display: -webkit-flex;
        -webkit-justify-content: space-between;
        -webkit-align-items: center;
        position: relative;
        .service{
          display: -webkit-flex;
          -webkit-justify-content: space-between;
          -webkit-align-items: center;
          color: #333333;
          font-size: .16rem;
          img{
            width: .3rem;
            height: .3rem;
            margin-right: .15rem;
          }
        }
        span{
          position: absolute;
          right: 0;
          top: -.02rem;
          color: #898989;
          font-size: .24rem;
        }
      }
    }
  }

</style>
