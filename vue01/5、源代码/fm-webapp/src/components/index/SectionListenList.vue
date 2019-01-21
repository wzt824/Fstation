<template>
  <div class="group new">
    <list-title></list-title>
    <listen-inform :lists="listens"></listen-inform>
  </div>
</template>

<script>
    import ListTitle from "./ListTitle";
    import ListenInform from "./ListenInform";
    import ListenApisServer from "../../apis/ListenApis";
    export default {
        name: "SectionListenList",
      components: {ListenInform, ListTitle},
      data(){
        return {
          listens:[]
        }
      },
      methods:{
        _initListenData(){
          ListenApisServer.getListenData(data=>{
            this.listens = data
            console.log(this.listens)
          })
        }
      },
      created(){
        //首页加载数据
        this._initListenData()
      }
    }
</script>

<style lang="scss" scoped>

</style>
