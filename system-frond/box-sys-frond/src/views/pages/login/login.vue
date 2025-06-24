<template>
  <div class="login-container">
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <div class="login-card">
      <div class="login-left">
        <h1 class="system-title">Welcome Back</h1>
        <p class="system-desc">仓易通后台管理系统</p>
        <img src="@/assets/logo.png" style="height: 150px;width: 150px;" alt="banner" />
      </div>

      <div class="login-right">
        <h2 class="login-title">登录</h2>
        <form @submit.prevent="handleLogin">
          <input v-model="username" type="text" placeholder="请输入用户名" class="login-input" />
          <input v-model="password" type="password" placeholder="请输入密码" class="login-input" />
          <button type="submit" class="login-btn">立即登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  if (username.value === 'admin' && password.value === '123456') {
    alert('登录成功')
    router.push('/dashboard')
  } else {
    alert('用户名或密码错误')
  }
}
</script>

<style scoped>
.background{
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
}
.background .shape{
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
}
.shape:first-child{
    background: linear-gradient(
        #1845ad,
        #23a2f6
    );
    left: -20px;
    top: -67px;
}
.shape:last-child{
    background: linear-gradient(
        to right,
        #ff512f,
        #f09819
    );
    right: -20px;
    bottom: -80px;
}
.login-container {
  width: 100vw;
  height: 100vh;
  background: #f5f5f5 url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="%23ccc"><circle cx="10" cy="10" r="1"/></svg>') repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  display: flex;
  width: 800px;
  height: 480px;
   background-color: rgba(255,255,255,0.13);
   backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
  border-radius: 16px;
  overflow: hidden;
  font-family: 'Poppins',sans-serif;
    color: #333;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  /* box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2); */
  /* background-color: #fff; */
}
/* .login-card *{
    
} */
.login-left {
  width: 50%;
  /* background: #f6f9ff; */
  padding: 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-left img {
  width: 80%;
  margin-top: 20px;
}

.system-title {
  font-size: 28px;
  font-weight: 600;
}

.system-desc {
  font-size: 14px;
}

.login-right {
  width: 50%;
  padding: 60px 40px;
  /* background: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: center;
  color: #333;
}

.login-input {
  width: 70%;
  padding: 12px 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: 10%;
  font-size: 15px;
  transition: border 0.3s;
}

.login-input:focus {
  border-color: #409eff;
  outline: none;
}

.login-btn {
  width: 80%;
  margin-left: 10%;
  padding: 12px;
  background: linear-gradient(to right, #409eff, #66b1ff);
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}

.login-btn:hover {
  opacity: 0.9;
}
</style>
