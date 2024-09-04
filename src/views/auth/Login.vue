<script setup lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();

const email = ref("");
const password = ref("");
function submit() {
  if (email.value == "admin" && password.value == "admin") {
    router.push("/");
  } else {
    alert("Invalid email or password");
  }
}
</script>

<template>
  <div class="container mx-auto">
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="submit">
        <div class="textbox">
          <label for="email">Email</label>
          <input
            v-model="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="textbox">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="newpassword"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button id="auth_submit_btn" type="submit" class="btn">Login</button>
        <a href="#" class="forgot">Forgot Password?</a>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}

.login-box {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.textbox {
  margin-bottom: 15px;
}

.textbox label {
  display: block;
  margin-bottom: 5px;
  color: #333;
}

.textbox input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}

.textbox input:focus {
  border-color: #007bff;
}

.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}

.forgot {
  display: block;
  text-align: center;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.forgot:hover {
  text-decoration: underline;
}
</style>
