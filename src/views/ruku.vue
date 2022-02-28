<template>
  <div>
    <h1>
      <topbar/> 入库记录
    </h1>
    <h2>
      <router-link to="/rukumingxi" class="bar"><span>入库明细</span></router-link>
      <router-link to="/rukutongji" class="bar"><span>入库统计</span></router-link>
    </h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      return this.$router.push("/");
    },
  },
};
</script>

<style scoped>
h1 {
    background-color: #a80735;
  color: white;
  text-align: center;
  line-height: 0.47rem;
  position: relative;
}
.goback {
  position: absolute;
  left: 0px;
  top: 0.07rem;
}
h2{
    background-color:#a80735 ;
    display: flex;
    height: .5rem;
}
.bar{
    text-align: center;
    line-height: .5rem;
    width: 50%;
    color: white;
        font-size: .2rem;

}
.router-link-exact-active>span{
    padding: .1rem 0;
    border-bottom: 4px solid white;
}
</style>