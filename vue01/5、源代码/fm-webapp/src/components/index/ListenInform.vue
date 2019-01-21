<template>
  <div class="listen">
    <ul>
      <li v-for="(p1,index1) in lists.listen01">
        <a href="">
          <img  :src="p1.pic"></img>
          <h3 class="big-tit">{{p1.title}}</h3>
          <span>{{p1.intro}}</span>
        </a>
      </li>
    </ul>
    <ul>
      <li v-for="(p2,index2) in lists.listen02">
        <a href="">
          <img  :src="p2.pic"></img>
          <h3 class="big-tit">{{p2.title}}</h3>
          <span>{{p2.intro}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
   ;

    export default {
      name: "ListenInform",
      props:["lists"]

    }
</script>

<style lang="scss" scoped>
  .listen{
    ul{
      margin-top: .2rem;
      display: flex;
      overflow-x: scroll;
    }
  }

  li{
    margin-right: .6rem;
    a{
      display: flex;
      flex-direction: column;
      align-items: center;
      img{
        width: 1.05rem;
        height: 1.05rem;
        border-radius: 50%;
      }
      h3{
        margin: .11rem 0 .07rem 0;
        font-size: .17rem;
        color: #4a4a4a;
      }
      span{
        font-size: .13rem;
        color: #9f9f9f;
      }
    }
  }
</style>
