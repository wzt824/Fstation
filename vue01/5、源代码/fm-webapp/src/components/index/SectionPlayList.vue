<template>
  <div class="group play">
    <list-title></list-title>
    <div class="play-box">
      <play-inform :plitem="p" :plind="index" v-for="(p,index) in play"></play-inform>
    </div>
  </div>
</template>

<script>
    import ListTitle from "./ListTitle";
    import PlayInform from "./PlayInform";
    export default {
        name: "SectionPlayList",
      components: {PlayInform, ListTitle},
      props:["play"]
    }
</script>

<style lang="scss" scoped>
  .play-box{
    display: flex;
    justify-content: space-between;
  }
</style>
