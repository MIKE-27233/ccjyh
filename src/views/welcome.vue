<template>
  <div>
      <h1>Welcome</h1>
      <div class="bgp" @click="toHome()"> 

  </div>
  </div>
</template>

<script>
export default {
    methods:{
        toHome(){
            this.$router.push('/home')
        }
    }

}
</script>

<style scoped>
h1{
    height: .55rem;
    line-height: .5rem;
}
.bgp{
    background-image: url(../../public/welcomeBGP.jpg);
    background-size: 3.9rem;
    width: 100%;
    height: 8.7rem;
}
</style>