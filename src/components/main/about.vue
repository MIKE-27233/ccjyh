<template>
  <div>
      <h1>我的基本信息 <topbar/> </h1>
      <Top/>
     <table>
         <thead>基本信息</thead>
         <tbody>
        <tr v-for="(v,i) in userinfo" :key="i">
             <td>{{v.title}}</td>
             <td>{{v.val}}</td>
         
         </tr>
         <tr>
             <td>入库数量</td>
             <td>    {{this.$store.state.rukuinfo.length}}</td>
         </tr>
         </tbody>
     </table>
  </div>
</template>

<script>
import Top from "@/components/main/top.vue"

export default {
    data(){
        return{
            userinfo:[
            {title:"姓名",val:"XXX"},
            {title:"联系电话",val:"XXX"},
            {title:"终端编号",val:"NO.007108"},
            {title:"终端级别",val:"NO.黄金门店"},

        ]
        }
    },
    components:{
        Top,
    }
}
</script>

<style scoped>
table{
    padding: .2rem;
}
thead{
    font-size: .24rem;
    font-weight: 700;
}
tbody{
    line-height: .3rem;
}
tbody>tr>td:first-child{
    /* border-bottom: 1px solid grey; */
    color: gray;

}
</style>