<template>
  <div id="app">
    <Header></Header>
    <div id="layout">
      <div class="aside">
        <Contact :contacts="contacts"> </Contact>
      </div>
      <div class="post">
        <Posts :posts="posts"> </Posts>
      </div>
      <div class="ifos">
        <Infos :infos="infos"> </Infos>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import Infos from "./components/Infos";

import { getContacts, getPosts, getInfos } from "./api";

export default {
  name: "App",
  components: {
    Header,
    Posts,
    Contact,
    Infos
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    //Faire les appels ajax pour récupérer le listing de posts
    getPosts().then((posts) => {
      this.posts = posts;
    });
    getContacts().then((contacts) => {
      this.contacts = contacts;
    });
    getInfos().then((infos) => {
      this.infos = infos;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

#layout {
  display: flex;
  width: 100%;
}

.aside {
  width: 20%;
  margin: 10px 10px;
}

.post {
  width: 100%;
}

.infos {
  margin: 10px 10px;
  width: 20%;

}
</style>
