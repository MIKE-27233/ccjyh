<template>
  <div>
      <input type="text">
  </div>
</template>

<script>
export default {
     activated(){
        console.log("进入到keep-alive管理的组件了")
    },
    deactivated(){
        console.log("离开了keep-alive管理的组件了")
    },

}
</script>

<style>

</style>