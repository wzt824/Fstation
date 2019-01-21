<template>
  <div class="box">
    <shopcart-header :tn="totalNum"></shopcart-header>
    <shopcart-section :lists="shopcarts" @add="addQal" @minus="minQal" :tm="totalMoney" :tn="totalNum"></shopcart-section>
    <index-footer></index-footer>
  </div>
</template>

<script>
  import ShopApisServer from "../apis/ShopApis";

    import ShopcartHeader from "../components/shopcarts/ShopcartHeader";
    import ShopcartSection from "../components/shopcarts/ShopcartSection";
    import IndexFooter from "../components/IndexFooter";
    export default {
        name: "Shops",
      components: {IndexFooter, ShopcartSection, ShopcartHeader,ShopApisServer},
      data(){
        return{
          /**
           * 总件数
           */
          totalNum: 0,

          /**
           * 总金额
           */
          totalMoney: 0,
          /**
           * 商品列表
           */
          shopcarts:[]
        }
      },
      methods: {
        _countCarts(shopcarts) {
          this.totalMoney = 0
          this.totalNum = 0
          shopcarts.forEach((item,idx)=>{
            this.totalNum +=parseFloat(item.qal)
            this.totalMoney += item.qal * item.nowprice
            console.log(item.nowprice)
            console.log(item.qal)
          })
        },

        _initShopData() {
          ShopApisServer.getShopcartsData(data => {
            this.shopcarts = data
            console.log(this.shopcarts)
          })
        },
        /**
         * 给每个商品增加件数
         * @param i
         */
        addQal(i) {
          this.shopcarts[i].qal++
        },

        /**
         * 给每个商品减少件数
         * @param i
         */
        minQal(i) {
          if( this.shopcarts[i].qal <=1){
            this.shopcarts[i].qal =1
          }else{
            this.shopcarts[i].qal--
          }
        }
      },
      created() {
        this._initShopData()
      },
      watch:{
        //监听shopcarts中的数量发生变化，重新计算
        shopcarts:{
          handler:function (n,o) {
            this._countCarts(this.shopcarts)
          },
          deep:true
        }
      }
    }
</script>

<style scoped>
  .box{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
