// Sign_In.vue

<template>
  <div id="app">
    <HeaderNotConnected></HeaderNotConnected>
    <div class="layout-page">
      <form @submit.prevent="submit()">
        <h1>Sign Up</h1>
        <p v-if="errorMessage" class="error"></p>
        <label for="name">Username:</label>
        <input type="text" name="name" id="name" required />
        <label for="password">Password:</label>
        <input type="text" name="password" id="password" required />
        <label for="password_confirm">Confirm Password: </label>
        <input
          type="text"
          name="password-confirm"
          id="password-confirm"
          required
        />
        <button>
          <router-link to="/LoginForm">Create Account</router-link>
        </button>
      </form>
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
        password_confirm: this.password_confirm,
      });
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Helvetica", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  background-color: rgb(0, 0, 0);
  padding-top: 150px;
}

.layout-page {
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(../assets/images/background/businessman-touching-red-icon-connected.jpg);
  background-size: cover;
  padding-top: 150px;
}
h1 {
  font-size: 1.5em;
  font-weight: 100;
}

form {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1px rgba(255, 255, 255, 0.39) solid;
  padding: 2vh;
  background-color: rgb(0, 0, 0);
  border-radius: 4%;
  margin-bottom: 2vh;
}

input {
  width: 100%;
  border-radius: 4%;
}

img {
  max-width: 100%;
  opacity: 20%;
  position: absolute;
}

button {
  margin-top: 2vh;
  z-index: 10000;
}

@media (max-width: 375px) {
  .layout-page {
    max-width: 375px;
    margin: 0 4vh;
  }
}

@media (max-width: 768px) {
  .layout-page {
    max-width: 768px;
    margin: 0 4vh;
  }
}
</style>