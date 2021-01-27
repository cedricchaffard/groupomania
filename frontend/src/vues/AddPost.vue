<template>
  <div id="app">
    <HeaderConnected></HeaderConnected>
    <div class="layout">
      <form id="app" @submit="checkForm" methode="post">
        <h1>Add a new Post</h1>
        Titre<input type="text" name="title" v-model="title"/>
        Description<input type="text" name="texte" v-model="texte"/>
        image<input type="file" name="image"/>
        <div class="ctrl">
        <button>Ajouter</button>
        <router-link to="/">Annuler</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderConnected from "../components/HeaderConnected";
import { addPost } from "../api";

export default {
  name: "AddPost",
  components: {
    HeaderConnected,
  },
  data() {
    return {
      title: '',
      texte: ''
    };
  },
  methods:{
    checkForm: function (e) {
      e.preventDefault();
      if (this.title && this.texte) {
        const data = new FormData();
        data.append('title', this.title);
        data.append('description', this.texte);
        data.append('image', e.target.image.files[0])
        addPost(data).then(() => {
            this.$router.push('/');
        })
        
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
  height: 100vh;
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

}
form > input{
  margin-bottom: 3vh;
  border: .1px white solid;
}

@media (max-width: 375px){
  #app{
    padding-top: 0;
  }
  h1{
margin-top: 10vh;
  }
}
</style>

