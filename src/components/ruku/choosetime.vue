<template>
  <div>
    <van-cell is-link @click="showPopup" class="choosebar"
      >选择时间范围 <van-icon name="coupon-o"
    /></van-cell>
    <van-popup v-model="show" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        title="选择年月"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        confirm-button-text	= ""
      />
    </van-popup>
  </div>
</template>

<script>
import EventBus from "@/components/eventBus";
export default {
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      show: false,
      className: "",
    };
  },
  methods: {
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      }
      return val;
    },
    sHow() {
      this.className = this.show ? "timebar" : "";
      return (this.show = !this.show);
    },
    showPopup() {
      this.show = true;
    },
  },
  // 数据监听
  watch: {
    currentDate(newval, oldval) {
       oldval;
       EventBus.$emit("sendTime", newval);
    },
  },
};
</script>

<style scoped>
.van-cell--clickable {
  line-height: 0.3rem;
}
.choosebar {
  font-size: 0.14rem;
  height: 0.5rem;
  background-color: #f1f1f1;
}
.van-cell__value--alone {
  display: flex;
  justify-content: space-between;
}
.van-icon-arrow {
  display: none;
}
.van-icon-coupon-o {
  font-size: 0.2rem;
  line-height: 0.2rem;
}
</style>