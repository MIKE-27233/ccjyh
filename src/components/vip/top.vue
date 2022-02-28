<template>
  <div>
    <div class="top">
      <div class="first">
        <div class="bar">
          <div class="jifenbox">
            <input type="text" value="4700" /> 积分
            <van-icon name="arrow" />
          </div>
          <div style="padding-left:.1rem">您有0积分可用</div>
          <div @click="alert()" class="btn">签到
          </div>
        </div>
        <div>
            <img src="../../../public/vipImg.jpg" alt="#">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";

export default {
  methods: {
    alert() {
      Dialog({ message: "签到成功" });
    },
  },
};
</script>

<style>
img{
    width:3.6rem;
    margin-top: .2rem;
    border-radius: .1rem;
}
.bar{
    position: relative;
}
.btn{
    text-align: center;
    line-height: .3rem;
    width: .5rem;
    background-color: #b9355c;
    border-radius: .1rem;
    height: .3rem;
    position: absolute;
    right: .2rem;
    top: 50%;
    margin-top: -0.15rem;
}
.top {
  box-sizing: border-box;
  height: 3rem;
  background-color: #a80735;
  padding-top: 0.2rem;
  padding-left: 0.1rem;
}
.first {
  color: wheat;
  background-color: #a80735;
}
.jifenbox {
  color: wheat;
  display: flex;
  align-items: center;
}
input {
  font-size: 0.24rem;
  width: 0.7rem;
  text-align: right;
  border: none;
  background-color: #a80735;
}

</style>