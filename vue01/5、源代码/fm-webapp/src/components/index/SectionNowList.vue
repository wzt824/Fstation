<template>
  <div class="group story">
    <list-title></list-title>
    <div class="g-group">
      <ul>
        <now-inform :noitem="p" :noind="index" v-for="(p,index) in now"></now-inform>
      </ul>
    </div>
  </div>
</template>

<script>
    import ListTitle from "./ListTitle";
    import NowInform from "./NowInform";
    export default {
      name: "SectionNowList",
      components: {NowInform, ListTitle},
      props:["now"]
    }
</script>

<style lang="scss" scoped>
  .g-group{
    padding-top: .2rem;
    ul{
      overflow: hidden;
    }
  }
</style>
