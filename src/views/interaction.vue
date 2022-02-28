<template>
  <div>
    <h1>互动</h1>
    <div>
      <div v-for="(v, i) in arr" :key="i" class="list" @click="func()">
        <span :class="v.icon" class="iconfont" :style="v.colorstyle"></span>
        <span>{{ v.name }}</span>
        <van-icon name="arrow" class="arrow" />
      </div>
    </div>
    <bottomBar />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { name: "问卷调查", icon:"icon-renwu",colorstyle:"color:#a80735"},
        { name: "消费者活动", icon:"icon-hongbao",colorstyle:"color:#24da71"},
        { name: "通知公告", icon:"icon-tuiguangneirong",colorstyle:"color:#9d3622"},
        ],
    };
  },
  methods:{
    func(){
      this.$router.push("/white")
    }
  }
};
</script>

<style scoped>
.list {
  height: 0.5rem;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  display: flex;
  align-items: center;
}
.iconfont {
  font-size: 0.4rem;
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