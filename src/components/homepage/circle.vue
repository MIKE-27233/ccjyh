<template>
  <div>
      <van-circle v-model="currentRate" :rate="res" :speed="50" :text="text" :clockwise="false" fill="#f2f0ef" size="1.66rem"></van-circle>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentRate: 0,
    };
  },
  props:["zitext"],
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
    res(){
        return parseInt(this.zitext/1.6)
    }
  },
};
</script>

<style>
.van-circle__text{
  
  font-size: .2rem !important;
  
  color: #a80735 !important;
}
</style>