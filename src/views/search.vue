<template>
  <div>
    <h1>添加产品入库 
</h1>
    <label for="addgoods">
      <div class="goodsnum">
        <span>入库编号:</span><input class="randomNum" v-model="newInfo.num">
      </div>
      <!-- allnew -->
      <div>
        <van-field name="radio" label="选择产品名称">
          <template #input>
            <van-radio-group v-model="radio" direction="horizontal">
              <van-radio name="1">长城五星干红葡萄酒</van-radio>
              <van-radio name="2">长城桑干起泡葡萄酒</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field name="stepper" label="确定产品数量">
          <template #input>
            <van-stepper v-model="stepper" />
          </template>
        </van-field>
        <van-field
          readonly
          clickable
          name="calendar"
          :value="value"
          label="选择提报日期"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirm" />
      </div>
      <div class="submitbar">
        <button @click="submit">提交</button>
      </div>
    </label>
    <div v-for="(v, i) in arr" :key="i" class="info">
      <van-icon name="cross" class="arrow" @click="del(i)" />
      <div>
        <span>入库单号：</span><span>{{ v.num }}</span>
      </div>
      <div>
        <span>产品名称：</span><span>{{ v.title }}</span>
      </div>
      <div>
        <span>时间：</span><span>{{ v.time }}</span>
      </div>
      <div>
        <span>数量：</span><span>{{ v.count }}</span>
      </div>
    </div>
    <bottomBar />
  </div>
</template>

<script>
export default {
  created() {
    let str = "rk";
    for (let i = 0; i < 6; i++) {
      let k = Math.floor(Math.random() * 9);
      str += k;
    }
    this.newInfo.num = str;

  },
  data() {
    return {
      newInfo: {
        num: "",
        title: "",
        time: new Date(),
        count: "",
      },
      arr: [],
      value: "",
      radio: "1",
      stepper: 1,
      showCalendar: false,
    };
  },
  methods: {
    submit() {
      this.newInfo.time = this.value;
      this.newInfo.count = this.stepper;
      this.newInfo.title =
        this.radio == 1 ? "长城五星干红葡萄酒" : "长城桑干起泡葡萄酒";
      this.arr.unshift(this.newInfo);
      this.$store.commit("addnewinfo", this.newInfo);
      this.newInfo = {
        num: "",
        title: "",
        time: new Date(),
        count: "",
      };
      this.getNum();
    },
    onConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}/${
        date.getYear() + 1900
      }`;
      this.showCalendar = false;
    },
    del(i) {
      this.arr.splice(i,1)
      let obj = this.arr.slice(i)
      this.$store.commit("delinfo",obj)
    },
    getNum() {
      let str = "rk";
      for (let i = 0; i < 6; i++) {
        let k = Math.floor(Math.random() * 9);
        str += k;
      }
      this.newInfo.num = str;
    },
  },
};
</script>

<style scoped>
.randomNum{
  border: none;
  font-size: .2rem;
}
.goodsnum {
  width: 100%;
  text-align: left;
  line-height: 0.3rem;
  font-size: 0.2rem;
}
.goodsnum > span:first-child {
  width: 30%;
  text-align: center;
}
.goodsnum > span:last-child {
  text-align: center;
}
.van-cell {
  font-size: 0.16rem;
  line-height: 0.2rem;
}
button {
  width: 0.6rem;
  text-align: center;
  font-size: 0.2rem;
  line-height: 0.25rem;
}
.submitbar {
  text-align: center;
}
.info {
  line-height: 0.3rem;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
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