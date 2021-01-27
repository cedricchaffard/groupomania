<template>
  <div id="app">
    <HeaderNotConnected></HeaderNotConnected>
    <div class="layout-page">
      <form @submit.prevent="submit()">
        <h1>Login</h1>
        <p v-if="errorMessage" class="error"></p>
        email<input type="email" v-model="email" /> password<input
          type="password"
          v-model="password"
        />
        <button class="login" type="submit">Log in</button>
      </form>
      <div class="create_account">
        Not already an account<br />
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

img {
  max-width: 100%;
  opacity: 20%;
  position: absolute;
}

.create_account {
  margin-bottom: 2vh;
  z-index: 100000;
}

button {
  margin-top: 2vh;
  z-index: 10000;
}

.login {
  margin-bottom: 10vh;
}

@media (max-width: 375px) {
  .layout-page {
    max-width: 375px;
    margin: 0 4vh;
  }

  .create_account {
    /* color: black; */
    font-weight: 600;
  }
}
@media (max-width: 768px) {
  .layout-page {
    max-width: 768px;
    margin: 0 4vh;
  }

  form {
    padding: 0 2vh 0 2vh;
    /* width: 30vh; */
  }

  .create_account {
    /* color: black; */
    font-weight: 600;
  }
  button {
    margin-top: 1vh;
    z-index: 10000;
  }
}
</style>