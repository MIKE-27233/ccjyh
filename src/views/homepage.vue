<template>
  <div>
    <h1>长城精英荟</h1>
    <Top/>
    <!-- <div class="top">
      <div class="leijixiaoshou words">累计销售</div>
      <div class="leftsmall">
        <div class="round">
          <div class="content">
            <input type="text" class="wordscolor_red input1" v-model="boxNum"   />
            <span>箱</span>
          </div>
        </div>
        <div class="words">累计销售</div>
      </div>
      <div class="midsmall">
        <Rate :zitext="boxNum" />
        <div class="time words">2022年2月17日~2023年2月16日</div>
      </div>
      <div class="rightsmall">
        <div class="round">
          <div class="content">
            <div class="wordscolor_red tasknum">160</div>
            <span>箱</span>
          </div>
        </div>
        <div class="words">总目标</div>
      </div>
    </div> -->
    <!--  -->
    <swiper />
    <!--  -->
    <Options class="option" />
    <!--  -->
    <bottomBar />
  </div>
</template>

<script >
import Top from "@/components/homepage/homepageTop.vue";
import Swiper from "@/components/homepage/swiper.vue";
import Options from "@/components/homepage/grid.vue";
export default {
  // mounted() {
  //     let arr = this.$store.state.rukuinfo
  //     let res = 0
  //     for(let k in arr){
  //       res += parseInt(arr[k].count)
  //     }
  //     this.boxNum = res
  // },
  // data() {
  //   return {
  //     boxNum: 0,
  //   };
  // },
  components: {
    Top,
    Swiper,
    Options,
  },
};
</script>

<style scoped>
/* input {
  text-align: center;
  max-width: 0.3rem;
  border: none;
  background: #f2f0ef;
}
.top {
  position: relative;
  padding-top: 0.2rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  background-image: url(/image/homebgp1.jpeg);
  background-position-y: 0.3rem;
  background-size: 2.7rem;
}
.leftsmall,
.rightsmall,
.midsmall {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.midsmall {
  width: 50%;
}
.wordscolor_red {
  color: #a80835;
}
.words {
  margin-top: 0.1rem;
  font-size: 0.1rem;
}
.round {
  background: #f2f0ef;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  height: 0.2rem;
  align-items: center;
  flex-shrink: 0;

}
.time {
  background: #f2f0ef;
}
.leijixiaoshou {
  position: absolute;
  left: 48%;
  top: 48%;
  z-index: 1000;
  margin-left: -0.16rem;
}
.option{
  padding-bottom: .48rem;
} */
</style>