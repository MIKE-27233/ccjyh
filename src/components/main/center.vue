<template>
  <div>
    <div class="mylist" v-for="(v, i) in myinfo" :key="i" @click="func(v.url)">
      <span>
        <span class="iconfont" :class="v.icon" :style="v.colorstyle"></span>
        <span>{{ v.title }}</span>
      </span>
      <van-icon name="arrow" class="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myinfo: [
        {
          title: "我的资料",
          icon: "icon-wodeziliao",
          url: "/mainabout",
          colorstyle: "color:#a80735",
        },
        {
          title: "我的轨迹",
          icon: "icon-wodeziliao",
          url: "/login",
          colorstyle: "color:#24da71",
        },
        {
          title: "电子授权牌",
          icon: "icon-wodeziliao",
          url: "/singin",
          colorstyle: "color:#9d3622",
        },
        {
          title: "关于我们",
          icon: "icon-wodeziliao",
          url: "#",
          colorstyle: "color:#a80735",
        },
        {
          title: "我的名片",
          icon: "icon-wodeziliao",
          url: "#",
          colorstyle: "color:#24da71",
        },
      ],
    };
  },
  methods:{
      func(e){
          this.$router.push(e)
      }
  }
};
</script>

<style scoped>
.mylist {
  background: white;
  height: 0.5rem;
  border-bottom: 2px solid #f1f0f0;
  display: flex;
  padding: 0 0.1rem;
  justify-content: space-between;
  font-size: 0.2rem;
  align-items: center;
}
.iconfont {
  font-size: 0.3rem;
  margin-right: 0.1rem;
}

</style>