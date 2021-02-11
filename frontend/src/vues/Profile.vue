<template>
  <div id="app">
    <HeaderConnected></HeaderConnected>
    <div class="layout-page">
      <form @submit="submit">
        <h1>Profile</h1>
        <p v-if="errorMessage" class="error"></p>
        <label for="first_name">Prénom :</label>
        <input
          type="text"
          name="first_name"
          id="first_name"
          v-model="first_name"
          required
        />
        <label for="last_name">Nom :</label>
        <input
          type="text"
          name="last_name"
          id="last_name"
          v-model="last_name"
          required
        />
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="email" required />

        <button type="submit" class="modify">Modifier mon profile</button>
      </form>
      <div class="delete">
        <h2>Supprimer mon profile</h2>
        <button type="button" @click="deleteProfileAction">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderConnected from "../components/HeaderConnected";
import { getMe, updateProfile, deleteProfile } from "../api";

export default {
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
  },
  components: {
    HeaderConnected,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  created() {
    getMe().then((data) => {
      (this.first_name = data.data.first_name),
        (this.last_name = data.data.last_name),
        (this.email = data.data.email);
    });
  },
  methods: {
    submit(e) {
      e.preventDefault();
      updateProfile({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
      }).then(
        () => {
          alert("Profile modifié");
        },
        (err) => {
          console.log(err);
        }
      );
    },
    deleteProfileAction() {
      if (confirm("Souhaitez-vous supprimer votre compte?")) {
        deleteProfile().then(() => {
          localStorage.removeItem("groupomania_token");
          this.$router.push("/LoginForm");
        });
      }
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
  font-size: 1.2em;
  font-weight: 500;
}

form {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1px rgba(255, 255, 255, 0.39) solid;
  padding: 0 2vh 2vh 2vh;
  background-color: rgb(0, 0, 0);
  border-radius: 4px;
  margin-bottom: 2vh;
  width: 30vh;
}

.delete {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0.1px rgba(255, 255, 255, 0.39) solid;
  background-color: rgb(0, 0, 0);
  border-radius: 4px;
  padding: 0 2vh 2vh 2vh;
  width: 30vh;
}
h2 {
  font-size: 1.2em;
  font-weight: 500;
}

.modify {
  margin-top: 2vh;
}

input {
  width: 100%;
  border-radius: 4px;
  margin: 1vh;
}

img {
  max-width: 100%;
  opacity: 20%;
  position: absolute;
}

button {
  z-index: 10000;
  color: white;
  background-color: black;
  cursor: pointer;
  border-radius: 4px;
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