<template>
  <div class="box">
    <listen-header></listen-header>
    <listen-section></listen-section>
    <index-footer></index-footer>
  </div>
</template>

<script>
    import ListenHeader from "../components/listen/ListenHeader";
    import ListenSection from "../components/listen/ListenSection";
    import IndexFooter from "../components/IndexFooter";
    export default {
        name: "Center",
      components: {IndexFooter, ListenSection, ListenHeader}
    }
</script>

<style scoped>
  .box{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
