<template>
  <div id="app">
    <HeaderConnected :infos="infos"></HeaderConnected>
    <div class="layout">
      <div class="aside">
        <Contacts :contacts="contacts"> </Contacts>
      </div>
      <div class="post">
        <Posts
          :posts="posts"
          :displayCommentModal="displayCommentModal"
          :displayCommentView="displayCommentView"
        >
        </Posts>
      </div>
      <div class="photos">
        <Photos :photos="photos"> </Photos>
      </div>
    </div>
    <CommentModal
      v-if="commentModalVisible"
      :close="() => (commentModalVisible = false)"
    ></CommentModal>
    <CommentView
      v-if="commentViewVisible"
      :close="() => (commentViewVisible = false)"
    ></CommentView>
  </div>
</template>

<script>
import HeaderConnected from "../components/HeaderConnected.vue";
import Contacts from "../components/Contacts";
import Posts from "../components/Posts";
import Photos from "../components/Photos";
import CommentModal from "../components/CommentModal";
import CommentView from "../components/CommentView";

import { getContacts, getPosts, getInfos, getPhotos } from "../api";

export default {
  name: "App",
  components: {
    HeaderConnected,
    Posts,
    Contacts,
    Photos,
    CommentModal,
    CommentView,
  },
  data() {
    return {
      posts: [],
      contacts: [],
      infos: [],
      photos: [],
      commentModalVisible: false,
      commentViewVisible: false,
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
    getPhotos().then((photos) => {
      this.photos = photos;
    });
  },
  methods: {
    displayCommentModal(post) {
      this.commentModalVisible = true;
      console.log(post);
    },
    displayCommentView(post) {
      this.commentViewVisible = true;
      console.log(post);
    },
  },
};
</script>

<style>
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
  max-width: 1024px;
  margin: auto;
}

header {
  height: 150px;
}

.aside {
  height: calc(100vh - 150px);
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 150px;
}

.post {
  height: calc(100vh - 150px);
  overflow: auto;
}
/* 
.comment-layout{
  min-width: 300px; 
  margin: 0 30px; 
  margin-bottom: 20px;
  border-radius: 4px;
  position: relative;
  background-color: rgb(255, 255, 255);
  border: 0.1px #ffffff70 solid;
  color: black;
  margin-left: 0;
  
} */
</style>
