<template>
    <section>
      <section-head></section-head>
      <section-list></section-list>
    </section>
</template>

<script>
    import SectionHead from "./SectionHead";
    import SectionList from "./SectionList";
    export default {
        name: "MySection",
      components: {SectionList, SectionHead}
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow: auto;
    background-color: #f5f5f7;
  }
</style>
