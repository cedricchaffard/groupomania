<template>
  <div id="app">
    <HeaderNotConnected></HeaderNotConnected>
    <div class="layout-page">
      <!-- <img src="../assets/images/background/businessman-touching-red-icon-connected.jpg" alt="" /> -->
      <h1>Login</h1>
      <form @submit.prevent="submit()">
        <p v-if="errorMessage" class="error"></p>
        email<input type="email" v-model="email" />
        password<input
          type="password"
          v-model="password"
        />
        <button type="submit">Log in</button>
      </form>
      <div class="create_account">
        Not already an account<br /><br />
        <button class="signup">
            <router-link to="/Sign_Up">Create</router-link>
          </button>
      </div>
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

.layout-page {
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(../assets/images/background/businessman-touching-red-icon-connected.jpg);
  background-size: cover;

}
form {
  color: white;
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 0.1px rgba(255, 255, 255, 0.39) solid;
  padding: 2vh;
  width: 20vh;
  background-color: brown;
  border-radius: 4%;
  margin-bottom: 2vh;
  /* z-index: 1000; */
}

img {
  /* z-index: 10000000; */
  /* filter: invert(100%); */
  max-width: 100%;
  opacity: 20%;
  position: absolute;
}

.create_account{
  margin-bottom: 2vh;
    z-index: 100000;
}

button{
  z-index: 10000;
}
</style>