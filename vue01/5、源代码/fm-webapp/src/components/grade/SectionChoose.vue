<template>
  <ul>
    <li v-for="(p,index) in datas" :class="{'active': nowIndex===index}" @click="tabClick(index)">{{p.title}}</li>
  </ul>
</template>

<script>
    export default {
        name: "SectionChoose",
      data(){
          return{
            datas:[
              {"title":"周榜"},
              {"title":"总榜"}
            ],
            nowIndex: 0
          }
      },
      methods: {
        _initPage() {
          this.nowIndex = this.$route.path === '/Grade' ? 0 : this.$route.path === '/Grade2' ? 1  : 0;
        },

        tabClick(index) {
          this.nowIndex = index;
          let href = index === 0 ? '/Grade' : index === 1 ? '/Grade2': '/Grade';
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
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .1rem 1.05rem;
    border-bottom: 1px solid #efeff1;
    li{
      padding: .13rem .5rem;
      border-radius: .25rem;
      font-size:.15rem ;
      color: #999999;
      border: 1px solid #999999;
    }
    .active{
      color: #ff5353;
      border: 1px solid #ff5353;
    }
  }
</style>
