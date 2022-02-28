<template>
  <div>
    <div class="circle">
      <van-icon name="home-o" @click="goBack()" class="topbar" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.circle {
  widows: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  color: wheat;
  background-color: #8f042d;
}
.circle {
  position: absolute;
  top: 50%;
  margin-top: -0.165rem;
  left: 0.06rem;
}
</style>