<template>
  <div id="app">
    <HeaderConnected></HeaderConnected>
    <div class="layout">
      <form id="app" @submit="checkForm">
        <h1>Modifier un Post</h1>
        Titre<input type="text" name="title" v-model="title" />
        Description<input type="text" name="texte" v-model="texte" />
        <img :src="`http://localhost:3000/images/${image}`" width="300" />
        image<input type="file" name="image" />
        Publication
        <tinymce id="d1" v-model="about"></tinymce>
        <div class="controls">
          <button>Modifier</button>
          <router-link tag="mod" to="/" class="cancel">Annuler</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderConnected from "../components/HeaderConnected";
import tinymce from "vue-tinymce-editor";
import { modifyPost, getPost } from "../api";

export default {
  name: "ModifyPost",
  components: {
    HeaderConnected,
    tinymce: tinymce,
  },
  data() {
    return {
      id: "",
      title: "",
      texte: "",
      about: "",
      image: "",
    };
  },
  created() {
    const postId = this.$route.params.id;
    getPost(parseInt(postId)).then((p) => {
      this.title = p.title;
      this.description = p.texte;
      this.id = p.id;
      this.image = p.image;
      this.about = p.about;
    });
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      if (this.title && this.texte) {
        const data = new FormData();
        data.append("title", this.title);
        data.append("description", this.texte);
        data.append("publication", this.about);
        data.append("image", e.target.image.files[0]);
        modifyPost(this.id, data).then(() => {
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
  color: white;
  border: none;
  font-size: 0.8em;
}
.cancel {
  text-decoration: none;
  margin: 2vh;
  background-color: black;
  color: white;
  border: none;
  font-size: 0.8em;
  cursor: default;
}

@media (max-width: 375px) {
  #app {
    padding-top: 0;
  }
  h1 {
    margin-top: 10vh;
  }
}
</style>

