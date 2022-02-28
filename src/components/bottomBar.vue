<template>
  <div id="nav">
    <router-link to="/" @click="getColor()">
    <span class="iconfont icon-shouye"></span> 首页
    </router-link>
    <router-link to="/search">
      <span class="iconfont icon-saoma"></span>扫码
    </router-link>
    <router-link to="/interaction"
      ><span class="iconfont icon-hudongjiaoliu"></span>交互
    </router-link>
    <router-link to="/main" class="wode"
      ><span class="iconfont icon-wode"></span> 我的
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fn() {
      this.$router.push("/homepage");
    },
  },
};
</script>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  color: #c3beb7;
  font-size: 10px;
}
#nav {
  background-color: white;
  height: .48rem;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: flex;
}
.iconfont {
  font-size: 0.25rem;
}
.router-link-exact-active {
  color: #a80835;
}
</style>