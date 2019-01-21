<template>
  <section>
    <shopcart-li :list="lists" :tmm="tm" :tnn="tn" @add="addNum" @minus="minusNum"></shopcart-li>
    <shopcart-swiper></shopcart-swiper>
  </section>
</template>

<script>
    import ShopcartLi from "./ShopcartLi";
    import ShopcartSwiper from "./ShopcartSwiper";
    export default {
        name: "ShopcartMain",
      components: {ShopcartSwiper, ShopcartLi},
      props:["lists","tm","tn"],
      methods:{
        addNum(i){
          this.$emit("add",i)
        },
        minusNum(i){
          this.$emit("minus",i)
        }
      }

    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow: auto;
  }
</style>
