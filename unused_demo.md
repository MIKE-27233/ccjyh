<template>
  <div>
    <h1>添加产品入库</h1>
    <label for="addgoods">
      <div class="goodsnum">
        <span>入库编号:</span><span class="randomNum">{{ newInfo.num }}</span>
      </div>
      <div class="choosecount">
        <van-number-keyboard
          v-model="value"
          :show="show"
          :maxlength="1"
          @blur="show = false"
        />
      </div>
      <div class="gettitle">
        <van-picker
          title="选择上传产品名称"
          show-toolbar
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
          @change="onChange"
          confirm-button-text=""
          cancel-button-text=""
          :value-key="key"
        />
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
          label="日历"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirm" />
      </div>

      <div class="submitbar">
        <button @click="submit">提交</button>
      </div>
    </label>
    <bottomBar />
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  created() {
    let str = "rk";
    for (let i = 0; i < 6; i++) {
      let k = Math.floor(Math.random() * 9);
      str += k;
    }
    this.newInfo.num = str;
    console.log(str);
  },
  data() {
    return {
      newInfo: {
        num: "",
        title: "",
        time: new Date(),
        count: "",
      },
      show: false,
      value: "",
      columns: ["长城五星干红葡萄酒", "长城桑干起泡葡萄酒"],
      key: "",
      radio: "1",
      stepper: 1,
      showCalendar: false,
    };
  },
  methods: {
    submit() {
      let time = new Date();
      this.newInfo.time = time;
      this.newInfo.count = this.value;
      this.newInfo.title = this.columns[this.key];
      this.$store.commit("addnewinfo", this.newInfo);
    },
    onInput(value) {
      Toast(value);
    },
    onDelete() {
      Toast("删除");
    },
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast("取消");
    },
    onConfirm(date) {
      this.value = `${date.getMonth() + 1}/${date.getDate()}/${date.getYear() + 1900}`;
      this.
      this.showCalendar = false;
    },
  },
};
</script>

<style scoped>
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
</style>