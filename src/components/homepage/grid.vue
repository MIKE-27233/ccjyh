<template>
  <div>
    <div class="content">
      <!-- {{this.$store.state.homegrid.icons}} -->
      <div
        class="inner"
        v-for="(v, i) in this.$store.state.homegrid.icons"
        :key="i"
        @click="fun(v.url, v.icon, v.colorstyle)"
      >
        <span :class="v.icon" class="iconfont" :style="v.colorstyle"></span>
        <span class="words">{{ v.title }}</span>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("geticon", { url:"/data/list/lala" });
    this.newArr = this.$store.state.homegrid.icons;
  },
  data() {
    return {
      newArr: [],
    };
  },
  methods: {
    fun(e, v, c) {
      this.$router.push({ path: e, query: { iconfont: v, iconcolor: c } });
    },
  },
  computed: {
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
}
.inner {
  height: 0.925rem;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.iconfont {
  font-size: 0.4rem;
}
.words {
  margin-top: .1rem;
  font-size: 0.1rem;
}
.block{
  height: .48rem;
}
</style>