<template>
    <div>
      <grade-header></grade-header>
      <grade-section></grade-section>
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
