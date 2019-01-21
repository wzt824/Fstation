<template>
    <section>
      <section-choose></section-choose>
      <section-week :weeks="intros.week"></section-week>
    </section>
</template>

<script>

  import IntroApisServer from "../../apis/introApis";

    import SectionChoose from "./SectionChoose";
  import SectionWeek from "./SectionWeek";
    export default {
        name: "GradeSection",
      components: { SectionChoose,SectionWeek},
      data() {
        return {
          intros: []
        }
      },
      methods: {
        _initIntroData() {
          IntroApisServer.getIntroData(data => {
            this.intros = data
            console.log(this.intros)
          })
        }
      },


      created() {
        //首页加载数据
        this._initIntroData()
      },
    }
</script>

<style lang="scss" scoped>
section{
  background-color: #ffffff;
}
</style>
