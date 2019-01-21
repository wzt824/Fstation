<template>
    <div class="box">
      <my-header></my-header>
      <my-section></my-section>
      <index-footer></index-footer>
    </div>
</template>

<script>
    import MyHeader from "../components/my/MyHeader";
    import MySection from "../components/my/MySection";
    import IndexFooter from "../components/IndexFooter";
    export default {
        name: "My",
      components: {IndexFooter, MySection, MyHeader}
    }
</script>

<style scoped>
  .box{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
