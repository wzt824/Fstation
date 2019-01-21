<template>
    <header>
      <div class="tit">
        <img src="../../../static/image/zj.jpg" alt="" class="zuo">
        <span>专辑热播榜</span>
        <img src="../../../static/image/zj02.jpg" alt="" class="ic">
      </div>
      <ul class="nav-list">
        <li class="item" v-for="(p,index) in navList" :class="{'active': nowIndex===index}" @click="tabClick(index)">{{p.name}}</li>
      </ul>
    </header>
</template>

<script>
    export default {
      name: "GradeHeader",
      data(){
        return{
          navList:[
            {name:"全部"},{name:"小说"},{name:"相声小品"},{name:"小说"},
            {name:"直播"},{name:"精品"},{name:"头条"},{name:"情感"},
            {name:"儿童"},{name:"广播"},{name:"历史"}
          ],
          nowIndex: 0
        }
      },
      methods: {
        _initPage() {
          //this.nowIndex = this.$route.path === '/Index' ? 0 : this.$route.path === '/Tuokx' ? 1 : this.$route.path === '/Products' ? 2 : 0;
        },

        tabClick(index) {
          this.nowIndex = index;
          //let href = index === 0 ? '/Index' : index === 1 ? '/Tuokx': index === 2 ? '/Products':'/Index';
          // 利用路由的push方法更新路径地址
          //this.$router.push(href)
        }
      },
      mounted(){
        this.$nextTick(() => {
          // 初始化，保证刷新页面后内容区和导航键一致
          this._initPage();
        });
      }
    }
</script>

<style lang="scss" scoped>
  .tit{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f7c57c;
    padding: .15rem;
    .zuo{
      width: .15rem;
      height: .3rem;
    }
    span{
      font-size: .3rem;
      color: #ffffff;
    }
    .ic{
      width: .35rem;
      height: .35rem;
    }
  }

  .nav-list{
    width: 100%;
    display: flex;
    height: .5rem;
    overflow-x: scroll;
    white-space: nowrap;
    background-color: #e9e9e9;
    .item{
      white-space: nowrap;
      line-height: .45rem;
      margin-right: .3rem;
      color: #ececec;
      font-size: .17rem;
      color: #999999;
    }
    .active{
      color: #fd5353;
      font-size: .23rem;
      border-bottom: .05rem solid #fd5353;
    }
  }
</style>
