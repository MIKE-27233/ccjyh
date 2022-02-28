<template>
  <div>
    <h1>
      待处理任务
      <topbar />
    </h1>
    <div v-for="(v, i) in taskinfo" :key="i" class="list" @click="func()">
      <span :class="v.icon" class="iconfont" :style="v.colorstyle"></span>
      <span v-text="v.title"></span>
      <van-icon name="arrow" class="arrow" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskinfo: [
        {
          title: "扫码任务",
          url: "/search",
          icon: this.$route.query.iconfont,
          colorstyle: this.$route.query.iconcolor,
        },
      ],
    };
  },
  methods: {
    func() {
      this.$router.push("/search");
    },
  },
  computed: {},
};
</script>

<style scoped>
.iconfont {
  font-size: 0.4rem;
}
.list {
  height: 0.5rem;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  display: flex;
  align-items: center;
}
.arrow {
  color: #f1f1f1;
  font-size: 0.3rem;
  position: absolute;
  right: 0.05rem;
  top: 50%;
  margin-top: -0.15rem;
}
</style>