<template>
  <div class="content">
    <h1>我的</h1>
    <Top/>
    <Center/>
    <div class="exit"><button>退出登录</button></div>
  </div> 
  
</template>

<script>
import Top from "@/components/main/top.vue"
import Center from "@/components/main/center.vue"
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
  components:{
    Top,Center
  }
};
</script>

<style scoped>
.content{
  background-color: #f1f0f0;
}
button {
  height: .50rem;
  width: 100%;
  background-color: #a80735;
  color: white;
  text-align: center;
  position: relative;
  font-size: 0.2rem;
  border: none;
}
.exit{
  box-sizing: border-box;
  width: 100%;
  padding: 0 .1rem;
  position: absolute;
  bottom: 1rem;
}
</style>