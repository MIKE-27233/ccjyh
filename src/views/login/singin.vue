<template>
  <div>

    <h1>
      注册
      <topbar />
    </h1>
        <div class="bgp"><img src="/loginBGP.jpg" alt=""></div>

    <div class="content">
      <div class="center">
        <div class="username">
          <van-icon name="contact" />
          <input type="text" placeholder="请输入手机号" />
        </div>
        <div class="userpass">
          <van-icon name="goods-collect-o" />
          <input type="text" placeholder="请输入密码" />
        </div>
      </div>
      <div class="in"><button>注册</button></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bgp>img{
  width: 100%;
}
.content {
  padding: 0 0.2rem;
}
.center {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  margin-top: -0.5rem;
}
.username,
.userpass {
  box-sizing: border-box;
  border-bottom: 1px solid #7f7f7f;
  display: flex;
  padding: .1rem;
  font-size: 20px;
}
input {
  margin-left: .1rem;
  width: 2.8rem;
  border: none;
  flex: 1;
}
button {
  height: .50rem;
  width: 3rem;
  background-color: #a80735;
  color: white;
  text-align: center;
  position: relative;
  font-size: 0.2rem;
  border: none;
  border-radius: .2rem;
}
.in{
  box-sizing: border-box;
  padding: 0 .1rem;
  position: absolute;
  bottom: 1rem;
}
</style>