<template>
  <div id="app">
    <HeaderConnected></HeaderConnected>
    <div class="layout">
      <form id="app" @submit="checkForm" methode="post">
        <h1>Add a new Post</h1>
        Titre<input type="text" name="title" v-model="title" />
        Description<input type="text" name="texte" v-model="texte" />
        Image<input type="file" name="image" />
        Publication
        <tinymce id="d1" v-model="about"></tinymce>
        <div class="ctrl">
          <button>Ajouter</button>
          <router-link to="/" class="cancel">Annuler</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderConnected from "../components/HeaderConnected";
import tinymce from "vue-tinymce-editor";
import { addPost } from "../api";

export default {
  name: "AddPost",
  components: {
    HeaderConnected,
    tinymce: tinymce,
  },
  data() {
    return {
      title: "",
      texte: "",
      about: "",
    };
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      if (this.title && this.texte && this.about) {
        const data = new FormData();
        data.append("title", this.title);
        data.append("description", this.texte);
        data.append("publication", this.about);
        data.append("image", e.target.image.files[0]);
        addPost(data).then(() => {
          this.$router.push("/");
        });
        return true;
      }
    },
  },
};
</script>

<style scoped>
#app {
  padding-top: 100px;
}
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  text-decoration: none;
  margin: 2vh;
  background-color: black;
  border: none;
  color: white;
}
.cancel {
  text-decoration: none;
  margin: 2vh;
  color: white;
  font-size: 0.8em;
}
input {
  margin-bottom: 3vh;
  border: 0.1px white solid;
  width: 100%;
}

@media (max-width: 375px) {
  #app {
    padding-top: 0;
  }
  .layout {
    padding-top: 100px;
    margin: 0 1vh;
  }
  form {
    max-width: 100%;
  }
  h1 {
    margin-top: 10vh;
  }
}
</style>

