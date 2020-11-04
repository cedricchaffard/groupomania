// Sign_In.vue

<template>
  <div id="app">
    <HeaderNotConnected></HeaderNotConnected>
    <div class="layout">
      <h1>Sign Up</h1>
      <form action="">
        <div>
          <div>
            <label for="name">Username: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div>
            <label for="password">Password: </label>
            <input type="text" name="password" id="password" required />
          </div>
          <div>
            <label for="password-confirm">Confirm Password: </label>
            <input type="text" name="password-confirm" id="password-confirm" required />
          </div>
        </div>
      </form>
      <button>Create Account</button>
    </div>
  </div>
</template>

<script>
import HeaderNotConnected from "../components/HeaderNotConnected";

export default {
  components: {
    HeaderNotConnected,
  },
};
</script>

<style scoped>
div {
  color: white;
}

input {
  width: 10%;
  margin: 0.5vh;
}

#app {
  font-family: "Helvetica", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: rgb(0, 0, 0);
  padding-top: 150px;
}

.layout {
  display: block;
  max-width: 1024px;
  margin: auto;
}
</style>