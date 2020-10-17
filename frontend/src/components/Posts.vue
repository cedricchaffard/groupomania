<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <div>{{ post.title }}</div>
      <div class="likes">{{ post.likes }} likes</div>
      <i class="far fa-heart"></i>
      <img :src="post.image" />
      <div class="commentary">{{ post.commentaire }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Posts",
  props: {
    posts: Array,
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
  width: 100%;
}

li {
  padding: 20px;
  border: 1px black solid;
  width: 50%;
  margin-bottom: 20px;
  border-radius: 4px;
  position: relative;
  background-color: rgb(0, 132, 255);
    box-shadow: 6px 6px 8px 0 rgba(0, 0, 0, 0.25), -6px -6px 10px 0 rgba(255, 255, 255, 0.55);

}
.likes {
  position: absolute;
  bottom: 0;
  right: 0;
}

img {
  width: 100%;
}

.commentary {
    width: 100%;
    height: 100%;
    border: 1px solid black;
margin-bottom: 10px;
  box-shadow: 6px 6px 8px 0 rgba(0, 0, 0, 0.25), -6px -6px 10px 0 rgba(255, 255, 255, 0.55);

}

i {
  height: 20px;
  width: 20px;
  border: red solid 2px;
   position: absolute;
  bottom: 0;
  right: 50px;
  color: black;
}
</style>