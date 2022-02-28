<template>
  <div>
    <h1>会员中心 <topbar /></h1>
    <div>
      <div>
        <Top />
      </div>
    </div>
    <section>
      <div>
        <div class="tittle">
          <span>我的订单</span>
          <a href="#">查看全部订单 <van-icon name="arrow" /></a>
        </div>
        <div class="icons">
          <div class="iconbox" v-for="(v, i) in this.$store.state.vipicons.icons" :key="i">
            <span class="iconfont" :class="v.icon" :style="v.colorstyle"></span>
            <div>{{ v.tittle }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="tittle">
          <span>最新物流</span>
          <a href="">没得看 <van-icon name="arrow" /></a>
        </div>
        <div class="icons">
          <div class="iconbox" v-for="(v, i) in this.$store.state.vipicons.icons" :key="i">
            <span class="iconfont" :class="v.icon" :style="v.colorstyle"></span>
            <div>{{ v.tittle }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="tittle">
          <span>任务处理</span>
          <a href="">没得处理 <van-icon name="arrow" /></a>
        </div>
        <div class="icons">
          <div class="iconbox" v-for="(v, i) in this.$store.state.vipicons.icons" :key="i">
            <span class="iconfont" :class="v.icon" :style="v.colorstyle"></span>
            <div>{{ v.tittle }}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="tittle">
          <span>积分信息</span>
          <a href="">没得了解 <van-icon name="arrow" /></a>
        </div>
        <div class="icons">
          <div class="iconbox" v-for="(v, i) in this.$store.state.vipicons.icons" :key="i">
            <span class="iconfont" :class="v.icon" :style="v.colorstyle"></span>
            <div>{{ v.tittle }}</div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  </div>
</template>

<script>
import Top from "@/components/vip/top.vue";
export default {
  created() {
    this.$store.dispatch("vipicons", { url: "/data/list/hudong" });
    this.icons = this.$store.state.vipicons.icons;
  },
  data() {
    return {
      icons: [],
    };
  },
  components: {
    Top,
  },
};
</script>

<style scoped>
section {
  padding: 0 0.1rem;
  background-color: #f0f0f0;
}
.iconfont {
  font-size: 0.4rem;
}
.tittle {
  display: flex;
  justify-content: space-between;
  height: 0.5rem;
  line-height: 0.5rem;
}
.icons {
  height: 0.96rem;
  display: flex;
  text-align: center;
  background-color: #fefefe;
  align-items: center;
}
.iconbox {
  flex: 1;
}
</style>