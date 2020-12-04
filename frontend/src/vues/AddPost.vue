<template>
  <div id="app">
    <HeaderConnected></HeaderConnected>
    <div class="layout">
      <h1>Add a new Post</h1>
      <form id="app" @submit="checkForm">
        Titre<input type="text" name="title" v-model="title"/>
        Description<input type="text" name="texte" v-model="texte"/>
        <button>Ajouter</button>
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
        console.log(this.title, this.texte)
        // TODO: Faire un appel POST /posts à l'API pour ajouter le post
      // TODO: Faire une redirection vers App.vue
        addPost({title: this.title, texte: this.texte}).then(() => {
            this.$router.push('/');
        })
        
        return true;
      }
    },
  },
};
</script>

<style scoped>
.layout {
  /* border: 2px red solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 10%;
  justify-content: center;
  align-items: center;
}
</style>

