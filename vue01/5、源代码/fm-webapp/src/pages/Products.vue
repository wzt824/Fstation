<template>
    <div class="box">
      <index-header></index-header>
      <product-section></product-section>
      <index-footer></index-footer>
    </div>
</template>

<script>
    import IndexHeader from "../components/index/IndexHeader";
    import IndexFooter from "../components/IndexFooter";
    import ProductSection from "../components/product/ProductSection";
    export default {
        name: "Products",
      components: {ProductSection, IndexFooter, IndexHeader}
    }
</script>

<style lang="scss" scoped>
  .box{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
