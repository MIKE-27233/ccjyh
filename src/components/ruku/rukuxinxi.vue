<template>
  <div>
    <h1 @click="reset()">注销筛选</h1>
    <div v-for="(v, i) in goodsinfo" :key="i" class="info" v-show="v.bool">
      <van-icon name="arrow" class="arrow" />
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
  </div>
</template>

<script>
import EventBus from "@/components/eventBus";
export default {
  
  mounted() {
    this.goodsinfo.forEach(element => {
          element.bool = true
      });
    // 获取store数据，并传入页面，为方便按照月份筛选，每条数据后面加入一个tag以便标记月和年份
    this.goodsinfo = this.$store.state.rukuinfo;
    // for (let i = 0;i<=this.goodsinfo.length;i++){
    //           console.log(this.goodsinfo[i].time);
    //   this.dateTag[i] = this.goodsinfo[i]
    // }此处不能用for 循环，for循环会将对象的_ob_遍历，因其中没有.time 所以会报错 ，所以使用 for of  只会遍历数组的每一个值
    for (const x of this.goodsinfo) {
      this.dateTag.push(x.time.slice(0, 1) + x.time.slice(4)); //此处是将月份和年份单独取出进行拼接，获取到与日期筛选器相同格式的值并存入dateTage中
    }
    EventBus.$emit("sendDataTag",this.dateTag)//没用
    console.log(this.dateTag);
    // 获得eventbus传来的所选择时间，并且预备进行筛选,按照月份和年进行筛选,并重置时间选择
    EventBus.$on("sendTime", (val) => {
      this.monthChoosed = `${val.getMonth() + 1}/${val.getYear() + 1900}`;
    });
  },
  data() {
    return {
      dateTag: [],
      goodsinfo: [],
      monthChoosed: 0,
    };
  },
  watch: {
    monthChoosed(newV, oldV) {
      console.log(oldV);
      console.log("evetnbus接收的数据" + newV);
      for (const key in this.dateTag) {
        let tag = this.dateTag[key];
        if (tag !== newV) {
          this.goodsinfo[key].bool = false
          console.log(this.goodsinfo[key].bool)
        }else{
          this.goodsinfo[key].bool = true
        }
      }
    },
  },
  methods:{
    reset(){
      this.goodsinfo.forEach(element => {
          element.bool = true
      });
    }
  }
};
</script>

<style scoped>
h1{
  font-size: .12rem;
}
div {
  line-height: 0.3rem;
}
.info {
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: auto;
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