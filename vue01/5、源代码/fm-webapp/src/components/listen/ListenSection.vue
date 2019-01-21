<template>
    <section>
      <section-my-listen></section-my-listen>
      <section-intro-list :intro="intros.recommend"></section-intro-list>
    </section>
</template>

<script>

  import IntroApisServer from "../../apis/introApis";

    import SectionMyListen from "./SectionMyListen";
    import SectionIntroList from "../index/SectionIntroList";
    export default {
        name: "ListenSection",
      components: {SectionIntroList, SectionMyListen},
      data() {
        return {
          intros: []
        }
      },
      methods:{
        _initIntroData() {
          IntroApisServer.getIntroData(data => {
            this.intros = data
            console.log(this.intros)
          })
        }
      },
      created(){
        this._initIntroData()
      }
    }
</script>

<style scoped>
  section{
    flex: 1;
    overflow: auto;
    background-color: #f7f7f9;
  }
</style>
