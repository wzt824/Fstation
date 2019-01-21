<template>
  <div class="group child">
    <list-title></list-title>
    <div class="g-child">
      <intro-inform  :initem="p" :inind="index" v-for="(p,index) in intro"></intro-inform>
    </div>
  </div>
</template>

<script>
  import IntroApisServer from "../../apis/introApis";
    import ListTitle from "./ListTitle";
    import IntroInform from "./IntroInform";
    export default {
        name: "SectionIntroList",
      components: {IntroInform, ListTitle},
      props:["intro"]
    }
</script>

<style scoped>
  .g-child{
    margin-top: .2rem;
  }
</style>
