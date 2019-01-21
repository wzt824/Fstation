<template>
  <header>
    <div class="header-nav">
      <div id="nav">
        <ul class="nav-list">
          <li class="item" v-for="(p,index) in navList" :class="{'active': nowIndex===index}" @click="tabClick(index)">{{p.name}}</li>
        </ul>
      </div>
    </div>
    <div class="search-box">
      <a href=""><span>高晓松推荐</span><i class="iconfont icon-fangdajing"></i></a>
      <span><img src="../../assets/images/time.jpg" alt=""></span>
    </div>
  </header>
</template>

<script>
    export default {
      name: "IndexHeader",
      data(){
        return{
          navList:[
            {name:"推荐"},{name:"脱口秀"},{name:"精品"},{name:"小说"},
            {name:"直播"},{name:"相声小品"},{name:"头条"},{name:"情感"},
            {name:"儿童"},{name:"广播"},{name:"历史"}
          ],
          nowIndex: 0
        }
      },

      methods: {
        _initPage() {
          this.nowIndex = this.$route.path === '/Index' ? 0 : this.$route.path === '/Tuokx' ? 1 : this.$route.path === '/Products' ? 2 : 0;
        },


        tabClick(index) {
          this.nowIndex = index;
          let href = index === 0 ? '/Index' : index === 1 ? '/Tuokx': index === 2 ? '/Products':'/Index';
          // 利用路由的push方法更新路径地址
          this.$router.push(href)
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
  header {
    width: 100%;
    height: 1.22rem;
    padding: 0 .22rem;
    box-sizing: border-box;
    background-color: #949494; }

  .header-nav {
    height: .45rem;
    padding: .15rem 0;
    display: flex; }

  #nav{
    width: 100%;
    .nav-list{
      width: 100%;
      display: flex;
      height: .5rem;
      overflow-x: scroll;
      white-space: nowrap;
      .item{
        white-space: nowrap;
        line-height: .45rem;
        margin-right: .3rem;
        color: #ececec;
        font-size: .17rem;
      }
      .active{
        color: #ffffff;
        font-size: .23rem;
      }
    }
  }

  .swiper-slide-active{
    color: #ffffff;
    font-size: .22rem;
    border-bottom: 2px solid #fff;
  }
</style>
