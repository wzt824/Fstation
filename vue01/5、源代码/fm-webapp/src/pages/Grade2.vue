<template>
  <div>
    <grade-header></grade-header>
    <h2>这是总榜</h2>
  </div>
</template>

<script>
  import GradeHeader from "../components/grade/GradeHeader";
  import GradeSection from "../components/grade/GradeSection";
  export default {
    name: "Grade",
    components: {GradeSection, GradeHeader}
  }
</script>

<style scoped>

</style>
