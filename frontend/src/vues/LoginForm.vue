<template>
  <div id="app">
    <HeaderNotConnected></HeaderNotConnected>
    <div class="layout">
      <h1>Login</h1>
      <form @submit.prevent="submit()">
        <p v-if="errorMessage" class="error"></p>
        email<input type="email" v-model="email" /> password<input
          type="password"
          v-model="password"
        />
        <button type="submit">Log in</button>
      </form>
      <div>
        Not already an account<br /><br />
        <button>
            <router-link to="/Sign_Up">Create</router-link>
          </button>
      </div>
      <img src="../assets/images/background/computer.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import HeaderNotConnected from "../components/HeaderNotConnected";

export default {
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
  },
  components: {
    HeaderNotConnected,
  },
  methods: {
    submit() {
      this.$emit("submit", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: tomato;
}

h1 {
  font-size: 1.5em;
  font-weight: 100;
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
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form {
  color: white;
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 0.1px rgba(255, 255, 255, 0.39) solid;
  padding: 1vh;
  width: 20vh;
  background-color: brown;
  border-radius: 4%;
  margin-bottom: 2vh;
}

img {
  /* z-index: 10000000; */
  filter: invert(100%);
}
</style>