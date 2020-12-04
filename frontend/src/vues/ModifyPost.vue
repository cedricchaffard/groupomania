<template>
  <div id="app">
    <HeaderConnected></HeaderConnected>
    <div class="layout">
      <h1>Modify a new Post</h1>
      <form id="app" @submit="checkForm">
        Titre<input type="text" name="title" v-model="title"/>
        Description<input type="text" name="texte" v-model="texte"/>
        <button>Modifier</button>
      </form>
    </div>
  </div>
</template>

<script>
import HeaderConnected from "../components/HeaderConnected";
import { modifyPost, getPost } from "../api";

export default {
  name: "AddPost",
  components: {
    HeaderConnected,
  },
  data() {
    return {
      id: '',
      title: '',
      texte: ''
    };
  },
  created(){
      const postId = this.$route.params.id      
      getPost(parseInt(postId)).then((p) => {        
        this.title = p.title;
        this.texte = p.texte;
        this.id = p.id;
      })
  },
  methods:{
    checkForm: function (e) {
      e.preventDefault();
      if (this.title && this.texte) {
        console.log(this.title, this.texte)
        // TODO: Faire un appel POST /posts à l'API pour ajouter le post
      // TODO: Faire une redirection vers App.vue
        modifyPost({id: this.id, title: this.title, texte: this.texte}).then(() => {
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

