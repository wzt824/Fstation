<template>
  <div class="swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in list">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import IndexSection from "./index/IndexSection.vue";
  import TwoSection from "./two/TwoSection.vue";
  import ThreeSection from "./three/ThreeSection.vue";
  import FourSection from "./two/ThreeSection.vue";
  import FiveSection from "./two/ThreeSection.vue";

  import Swiper from '../../static/swiper.min';
  import '../../static/swiper.min.css';
    export default {
      name: "SectionPublic",
      components:{
        IndexSection,
        TwoSection,
        ThreeSection,
        FourSection,
        FiveSection
      },
      data() {
        return {
          list: [
            {path: '/', component: IndexSection},
            {path: '/IndexSection', component: IndexSection},
            {path: '/TwoSection', component: TwoSection},
            {path: '/ThreeSection', component: ThreeSection},
            {path: '/FourSection', component: FourSection},
            {path: '/FiveSection', component: FiveSection}
          ]
        }
      },
      mounted() {
        var mySwiper = new Swiper('.swiper-container', {
          // 设定初始化时slide的索引
          initialSlide: this.$route.path === '/IndexSection' ? 0 : this.$route.path === '/TwoSection' ? 1 : this.$route.path === '/ThreeSection' ? 2 : this.$route.path === '/FourSection' ? 3 : this.$route.path === '/FiveSection' ? 4 : 0
        });
        mySwiper.on('slideChange', () => { // 监控滑动后当前页面的索引，将索引发射到导航组件
          // 左右滑动时将当前slide的索引发送到nav组件
          this.$root.eventHub.$emit('slideTab', mySwiper.activeIndex);
        });
        // 接收nav组件传过来的导航按钮索引值，跳转到相应内容区
        this.$root.eventHub.$on('changeTab', (index) => { // 点击导航键跳转相应内容区
          mySwiper.slideTo(index, 0, false);
        });
        console.log(mySwiper);
      }
    }
</script>

<style scoped>

</style>
