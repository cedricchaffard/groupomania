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
          :displayPictureModal="displayPictureModal"
          :deletePost="deletePost"
          :likePost="likePost"
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
    <PictureModal
      v-if="pictureModalVisible"
      :post="photoPost"
      :close="() => (pictureModalVisible = false)"
   >
    </PictureModal>
  </div>
</template>

<script>
import HeaderConnected from "../components/HeaderConnected.vue";
import Contacts from "../components/Contacts";
import Posts from "../components/Posts";
import Photos from "../components/Photos";
import CommentModal from "../components/CommentModal";
import PictureModal from "../components/PictureModal";

import {
  getUsers,
  getPosts,
  getInfos,
  getPhotos,
  deletePost,
  likePost,
} from "../api";

export default {
  name: "App",
  components: {
    HeaderConnected,
    Posts,
    Contacts,
    Photos,
    CommentModal,
    PictureModal,
  },
  data() {
    return {
      posts: [],
      contacts: [],
      infos: [],
      photos: [],
      commentModalVisible: false,
      commentPost: null,
      pictureModalVisible: false,
    };
  },
  created() {
    //Faire les appels ajax pour récupérer le listing de posts
    getPosts().then((posts) => {
      this.posts = posts;
    });
    getUsers().then((contacts) => {
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
      this.commentPost = post;
      this.commentModalVisible = true;
    },
    addComment(postId, comment) {
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].id === postId) {
          this.posts[i].commentaires.push(comment);
          console.log(this.posts[i]);
          this.commentModalVisible = false;
          return;
        }
      }
    },
    displayPictureModal(post) {
      this.photoPost = post;
      this.pictureModalVisible = true;
    },
    deletePost(postId) {
      // Map, Reduce, Filter (MDN)
      if (confirm("Etes-vous sur de vouloir supprimer le post ?")) {
        deletePost(postId).then(() => {
          this.posts = this.posts.filter((p) => p.id !== postId);
        });
      }
    },
    likePost(postId) {
      //Je fais lq requete ajax pour liker un post
      likePost(postId).then((res) => {
        for (let i = 0; i < this.posts.length; i++) {
          if (this.posts[i].id === postId) {
            this.posts[i]["liked"] = res.status === 201;
            this.posts[i]["likes"] =
              res.status === 201
                ? this.posts[i]["likes"] + 1
                : this.posts[i]["likes"] - 1;
          }
        }
      });
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

.photos {
  margin-right: 0;
  margin-left: auto;
}

@media (max-width: 375px) {
  .photos {
    visibility: hidden;
  }
  .aside {
    visibility: hidden;
  }
  .post {
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  #app {
    background-color: black;
    min-height: 100%;
  }
  .photos {
    display: none;
  }
  .aside {
    display: none;
  }
}
</style>
