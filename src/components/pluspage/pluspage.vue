<template>
    <div>
      <h1>pluspage</h1>
      <div class="linkbox">
        <router-link to="/pluspage1" class="link">pluspage2</router-link>
        <router-link to="/pluspage2" class="link">pluspage3</router-link>
      </div>
           <keep-alive>
              <router-view></router-view>
           </keep-alive>

    </div>
</template>

<script>
export default {
     beforeCreate(){
      console.log("实例准备创建");
    },
    created(){
      console.log("实例创建完毕");
    },
    beforeMount(){
      console.log("模板准备渲染");
    },
    mounted(){
      console.log("模板渲染完毕");
    },
    beforeUpdate(){
      console.log("开始准备更新");
    },
    updated(){
      console.log("更新完毕");
    },
    beforeDestroy(){
      console.log("开始准备销毁");
    },
    Destroyed(){
      console.log("销毁完毕");
    }

}
</script>

<style scoped>
.linkbox{
  display: flex;
  text-align: center;
}
.link{
  flex: 1;
  box-sizing: border-box;
  background-color: green;
  border:1px solid white;
}

</style>