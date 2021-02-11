// Sign_In.vue

<template>
  <div id="app">
    <HeaderNotConnected></HeaderNotConnected>
    <div class="layout-page">
      <form @submit="submit">
        <h1>Sign Up</h1>
        <p v-if="errorMessage" class="error"></p>
        <label for="first_name">Firstname:</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          v-model="first_name"
          required
        />
        <label for="last_name">Lastname:</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          v-model="last_name"
          required
        />
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="email" required />
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          required
        />
        <label for="password_confirm">Confirm Password: </label>
        <input
          type="password"
          name="password-confirm"
          id="password-confirm"
          v-model="password_confirm"
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderNotConnected from "../components/HeaderNotConnected";
import { signup } from "../api";

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
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (this.password !== this.password_confirm) {
        return;
      }
      signup({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
      }).then(
        () => {
          this.$router.push("/LoginForm");
        },
        (err) => {
          console.log(err);
        }
      );
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
    padding-top: 50px;
  }
}

@media (max-width: 768px) {
  .layout-page {
    max-width: 768px;
    margin: 0 4vh;
  }
}
</style>