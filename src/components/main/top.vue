<template>
  <div class="content">
    <main>
      <header>
        <div>
          <img src="/logo.jpg" alt="" class="logo">
        </div>
        <div class="username">XXX</div>
      </header>
      <section>

      </section>
    </main>
    <bottomBar />
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.content{
  background-color:#f0f0f1;
}
header{
  height: 1.64rem;
  background-image: url(/image/homebgp1.jpeg);
  background-position-y:1.7rem;
  background-size: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: .1rem;
}
.logo{
  height: 1rem;
  border-radius: 50%;
  width: 1.3rem;
}
</style>