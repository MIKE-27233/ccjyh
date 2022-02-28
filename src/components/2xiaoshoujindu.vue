<template>
  <div>
    <h1>
      <span>销售进度</span>
      <topbar />
    </h1>
    <Top @reverse="gettaskNum" />

    <table>
      <thead>
        <tr>
        <td>季度</td>
        <td>目标值</td>
        <td>完成值</td>
        <td>完成率</td>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(v,i) in downList" :key="i">
        <td>{{v.title}}</td>
        <td>{{v.task}}</td>
        <td>{{v.down}}</td>
        <td>{{v.down/0.4 + "%"}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Top from "@/components/homepage/homepageTop.vue";

export default {
  created() {
    this.goodsinfo = this.$store.state.rukuinfo;
    console.log(this.goodsinfo);
    for (const x of this.goodsinfo) {
      let a = x.time.length-5
      this.dateTag.push(x.time.slice(0, 1) + x.time.slice(a)); //此处是将月份和年份单独取出进行拼接，获取到与日期筛选器相同格式的值并存入dateTage中
    }
    let val = this.dateTag;
    let ARR = this.downList;
    console.log(val);
    val.forEach((element) => {
      console.log(element);
      let year = element.slice(2);
      console.log(year);
      let month = element.slice(0,1)
      console.log(month)
      if (year == 2022) {
        if (0 < month && month <= 3) {
          ARR[0].down++;
        } else if (3 < month && month <= 6) {
          ARR[1].down++;
        } else if (6 < month && month <= 9) {
          ARR[2].down++;
        } else if (9 < month && month <= 12) {
          ARR[3].down++;
        } else {
          console.log("break");
        }
      }
      this.downList = ARR;
      // console.log(this.downList);
    });
  },

  data() {
    return {
      dateTag: [],
      goodsinfo: [],
      taskNum: {},
      // downList: [0, 0, 0, 0],
      taskpermonth: 0,
      downList: [
        { title: "第一季度", task: 40, down:0},
        { title: "第二季度", task: 40, down:0},
        { title: "第三季度", task: 40, down:0},
        { title: "第四季度", task: 40, down:0},
      ],
    };
  },
  components: {
    Top,
  },
  methods: {
    //得到逆向传值函数
    gettaskNum(v) {
      this.taskNum = v;
      this.taskpermonth = v.taskNum / 4;
      console.log(v.taskNum);
    },
  },
};
</script>

<style>
table{
  line-height: .3rem;
  width: 100%;
  text-align: center;
}
thead{
  background-color: skyblue;
}
tbody{
  background-color:aquamarine;
}
</style>