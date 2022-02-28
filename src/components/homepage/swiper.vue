<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :width="390" @change="onChange()" ndicator-color="0,0,0,0">
    <van-swipe-item v-for="(v,i) in image" :key="i"><img :src="v" alt="#">
    <template #indicator >
    <div class="custom-indicator">{{ current + 1 }}/4</div>
  </template>
    </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
export default {
    data(){
        return {
            image:[
                'image/swiper1.png',
                'image/swiper2.png',
                'image/swiper3.png',
                'image/swiper4.png',
                'image/swiper1.png',
            ],
             current: 0,
        }
    },
    methods: {
    onChange(index) {
      this.current = index;
    },
  },

};
</script>


<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 1rem;
  text-align: center;
  padding-top: .12rem;
}
img{
    width: 100%;
}
.custom-indicator {
    display: none;
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
}
</style>
