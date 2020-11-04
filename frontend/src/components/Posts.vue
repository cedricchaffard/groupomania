<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <div>{{ post.title }}</div>
      <div class="txtpost">{{post.texte}}</div>
      <img :src="postimage(post.image)" />
      <div class="actions">
        <button class="comment">Comment</button>
        <button class="commentary">Voir les commentaires</button>
        <button class="modify">Modifier</button>
        <button class="delete">Supprimer</button>
        <i class="far fa-heart"></i>
        <div class="likes">{{ post.likes }} likes</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Posts",
  props: {
    posts: Array,
  },
  methods: {
    postimage(image) {
      if (image) {
        return require("@/assets/images/groupomania_Logos/" + image);
      }
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

.txtpost{
  margin: 10px 0;
}
</style>