<template>
  <div class="group">
    <list-title></list-title>
    <div class="pai">
      <img src="../../../static/image/tkx01.jpg" alt="">
      <div class="grade">
        <p><img src="../../../static/image/first.jpg" alt="">小说2018</p>
        <p><img src="../../../static/image/second.jpg" alt="">今晚80后脱口秀2107</p>
        <p><img src="../../../static/image/third.jpg" alt="">梁知</p>
      </div>
    </div>
  </div>
</template>

<script>
    import ListTitle from "../index/ListTitle";
    export default {
        name: "SectionTwoPai",
      components: {ListTitle},
    }
</script>

<style lang="scss" scoped>
.pai{
  display: flex;
  align-items: center;
  margin-top: .25rem;
  img{
    width: 1.31rem;
    height: 1.31rem;
  }
  .grade{
    p{
      display: flex;
      align-items: center;
      font-size: .17rem;
      color: #7a7a7a;
      line-height: .5rem;
      img{
        width: .25rem;
        height: .25rem;
        margin: 0 .17rem;
      }
    }
  }
}
</style>
