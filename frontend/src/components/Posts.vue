<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <div>{{ post.title }}</div>
      <div v-if="post.texte" class="txtpost">{{ post.texte }}</div>
      <img v-if="post.image" :src="postimage(post.image)" />
      <div class="actions">
        <button @click="displayCommentModal(post)" class="comment">
          Commenter
        </button>
        <button @click="displayCommentView(post)" class="comment_view">
          Voir les commentaires
        </button>
        <button class="modify">
          <router-link :to="{name: 'ModifyPost', params: {id: post.id}}">Modifier</router-link>
        </button>
        <button @click="deletePost(post.id)" class="delete">Supprimer</button>
        <Like></Like>
      </div>
      <CommentView
        v-if="commentViewVisible[post.id]"
        :comments="post.commentaires"
        :close="() => (commentViewVisible[post.id] = false)"
      ></CommentView>
    </li>
  </ul>
</template>

<script>
import CommentView from "../components/CommentView";
import Like from "../components/Like";

export default {
  name: "Posts",
  components: {
    CommentView,
    Like,
  },
  data() {
    return {
      commentViewVisible: {},
      likes: 0,
    };
  },
  props: {
    posts: Array,
    displayCommentModal: Function,
    deletePost: Function
  },
  methods: {
    postimage(image) {
      if (image) {
        return require("@/assets/images/groupomania_Logos/" + image);
      }
    },
    displayCommentView(post) {
      this.commentViewVisible = { ...this.commentViewVisible, [post.id]: true };
      console.log(this.commentViewVisible);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  margin: 0 30px;
}

li {
  padding: 20px;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
  position: relative;
  background-color: rgb(255, 255, 255);
  border: 0.1px #ffffff70 solid;
  color: black;
  margin-left: 0;
}

img {
  width: 100%;
}

.actions {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

i {
  height: 20px;
  width: 20px;
  color: black;
}

.txtpost {
  margin: 10px 0;
}

a {
  text-decoration: none;
}

.fas:active {
  color: red;
  margin-right: 0;
}
.likes {
  display: flex;
}
</style>