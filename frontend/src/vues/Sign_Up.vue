// Sign_In.vue

<template>
  <div id="app">
    <HeaderNotConnected></HeaderNotConnected>
    <div class="layout">
      <h1>Sign Up</h1>
      <form @submit.prevent="submit()">
        <div>
          <div class="layout-form">
            <label for="name">Username: </label>
            <input type="text" name="name" id="name" required />
          </div>
          <div class="layout-form">
            <label for="password">Password: </label>
            <input type="text" name="password" id="password" required />
          </div>
          <div class="layout-form">
            <label for="password-confirm">Confirm Password: </label>
            <input
              type="text"
              name="password-confirm"
              id="password-confirm"
              required
            />
          </div>
        </div>
      </form>
      <button type="submit">Create Account</button>
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
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: auto;
  background-image: url(../assets/images/background/businessman-touching-red-icon-connected.jpg);
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  align-items: center;
  color: black;
}
h1 {
  margin-top: 2vh;
}

.layout-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 5px; */
  width: 100%;
  color: black;
  background-color: brown;
  padding: 1vh;
}

form{
  margin-bottom: 2vh;
}

input{
  width: 45%;
  border-radius: 4%;
}

</style>