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
          :deletePost="deletePost"
        >
        </Posts>
      </div>
      <div class="photos">
        <Photos :photos="photos"> </Photos>
      </div>
    </div>
    <CommentModal
      v-if="commentModalVisible"
      :post="commentPost"
      :addComment="addComment"
      :close="() => (commentModalVisible = false)"
    >
    </CommentModal>
  </div>
</template>

<script>
import HeaderConnected from "../components/HeaderConnected.vue";
import Contacts from "../components/Contacts";
import Posts from "../components/Posts";
import Photos from "../components/Photos";
import CommentModal from "../components/CommentModal";

import { getContacts, getPosts, getInfos, getPhotos } from "../api";

export default {
  name: "App",
  components: {
    HeaderConnected,
    Posts,
    Contacts,
    Photos,
    CommentModal,
  },
  data() {
    return {
      posts: [],
      contacts: [],
      infos: [],
      photos: [],
      commentModalVisible: false,
      commentPost: null,
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
      this.commentPost=post;
      this.commentModalVisible = true;
      console.log(post);
    },
    addComment(postId,comment) {
      for (let i=0; i<this.posts.length; i++) {
        if(this.posts[i].id === postId ) {
          this.posts[i].commentaires.push(comment)
          console.log(this.posts[i])
          this.commentModalVisible=false
          return
        } 
      }
      console.log(postId,comment)
    },
    deletePost(postId){
      // Map, Reduce, Filter (MDN)
      this.posts = this.posts.filter((p) => p.id !== postId);
    }
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

.photos {
  margin-right: 0;
  margin-left: auto;
}
</style>
