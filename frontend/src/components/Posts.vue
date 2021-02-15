<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <input
        aria-labelledby="menu-checkbox"
        class="menu-checkbox"
        type="checkbox"
        id="menu-checkbox"
      />
      <i class="fas fa-ellipsis-h"></i>
      <div class="title">
        {{ post.title }}
        <div v-if="post.description" class="txtpost">
          {{ post.description }}
          <div class="date">{{ format_date(post.created) }}</div>
        </div>
        <img
          @click="displayPictureModal(post)"
          v-if="post.image"
          :src="postimage(post.image)"
          class="image"
          alt="images publication Groupomania logo réseau entreprise"
        />
      </div>
      <div
        v-if="post.publication"
        class="publication"
        v-html="post.publication"
      >
        {{ post.publication }}
      </div>
      <div class="actions">
        <button @click="displayCommentModal(post)" class="comment">
          <i class="far fa-comment"></i>
          <span>Commenter</span>
        </button>
        <button @click="displayCommentView(post)" class="comment_view">
          <i class="far fa-comments"></i>
          <span>Voir les commentaires</span>
        </button>
        <button class="modify" v-if="post.editable">
          <router-link
            tag="mod"
            :to="{ name: 'ModifyPost', params: { id: post.id } }"
            ><i class="far fa-edit"></i>
            <span>Modifier</span>
          </router-link>
        </button>
        <button
          @click="deletePost(post.id)"
          class="delete"
          v-if="post.editable"
        >
          <i class="far fa-trash-alt"></i>
          <span>Supprimer</span>
        </button>
        <Like
          :like-post="() => likePost(post.id)"
          :isPostLiked="post.liked"
          :likes="post.likes"
        ></Like>
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
import moment from "moment";

export default {
  name: "Posts",
  components: {
    CommentView,
    Like,
  },
  data() {
    return {
      commentViewVisible: {},
    };
  },
  props: {
    posts: Array,
    displayCommentModal: Function,
    displayPictureModal: Function,
    deletePost: Function,
    likePost: Function,
  },
  methods: {
    postimage(image) {
      if (image) {
        return "http://localhost:3000/images/" + image;
      }
    },
    displayCommentView(post) {
      this.commentViewVisible = { ...this.commentViewVisible, [post.id]: true };
      console.log(this.commentViewVisible);
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format("YYYY MM DD h:mm:ss a");
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding: 0 1vh 1vh 1vh;
}
.date {
  font-size: 0.8em;
  font-weight: 100;
  margin-bottom: 1vh;
}
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
  border-radius: 4px;
  position: relative;
  border: 0.1px #ffffff3a solid;
  box-shadow: 1px 1px 5px rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  margin-left: 0;
  margin-bottom: 1vh;
  width: 100%;
}
.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5vh;
  border: 0.1px rgba(165, 165, 165, 0.253) solid;
  border-radius: 4px;
  margin-bottom: 0;
}
nav {
  text-decoration: none;
}
i {
  height: 20px;
  width: 20px;
  color: black;
}
.far {
  color: white;
}
.txtpost {
  margin: 10px 0;
  font-weight: 100;
  font-size: 0.9em;
  text-align: left;
}
.publication {
  margin: 1vh 0 2vh 0;
  font-weight: 100;
  font-size: 0.9em;
  text-align: left;
  padding-left: 1vh;
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
button {
  background-color: black;
  color: white;
  border-radius: 4px;
  border: none;
  outline: 0;
}
button:active {
  color: black;
}
img {
  margin-left: auto;
  margin-right: auto;
  width: 98%;
  z-index: 1000;
}
.menu-checkbox {
  display: none;
}
.close {
  display: none;
}

@media (max-width: 375px) {
  input {
    opacity: 0;
  }
  .menu-checkbox {
    display: inherit;
    position: absolute;
    right: 5px;
    top: 2px;
    z-index: 10000000;
    width: 10px;
    height: 10px;
  }
  .fas {
    color: white;
    font-size: 0.8em;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .post {
    width: 100%;
  }
  .layout {
    margin: 0;
    width: 100%;
  }
  ul {
    margin: 0;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.5vh;
    border: 0.1px rgba(165, 165, 165, 0.253) solid;
    border-radius: 4px;
    margin-bottom: 0;
    font-size: 1.5em;
    display: none;
  }
  .menu-checkbox:checked ~ .actions {
    display: inherit;
  }
  span {
    display: none;
  }
  button {
    font-size: 0.7em;
    background-color: white;
    border-radius: 4px;
    border: none;
    width: 70%;
    margin-bottom: 1vh;
  }
  .likes {
    align-items: center;
    width: 70%;
    display: flex;
  }
  .txtpost {
    width: 100%;
  }
}
@media (max-width: 768px) {
  #app {
    width: 90%;
  }
  .post {
    width: 100%;
  }
  .layout {
    margin: 0;
    width: 100%;
  }
  ul {
    margin: 0;
  }
  li {
    display: flex;
    flex-direction: column;
    width: 95%;
    padding: 0;
  }
  .actions {
    width: 100%;
    margin-top: 2vh;
  }
  button {
    background-color: black;
    color: white;
    border-radius: 4px;
    border: none;
  }
}
</style>