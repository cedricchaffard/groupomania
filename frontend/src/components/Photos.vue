<template>
  <div id="slideshow">
    <ul id="sContent">
      <h1>En image</h1>
      <li v-for="photo in photos" :key="photo.id">
        <div v-if="photo.image">
          <img
            :src="'http://localhost:3000/images/' + photo.image"
            width="100"
          />
        </div>
      </li>
    </ul>
    <div>
      <button class="add">
        <router-link tag="mod" to="/AddPost">+ Add a new Post</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { getPhotos } from "../api";

export default {
  name: "Photos",
  data() {
    return {
      photos: [],
    };
  },
  created() {
    getPhotos().then((photos) => {
      this.photos = photos;
    });
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.92);
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  margin-bottom: 2vh;
  border: 0.1px #ffffff15 solid;
  box-shadow: 1px 1px 5px rgb(255, 255, 255);
  height: 25vh;
  overflow-y: scroll;
}
li > div {
  border: 0.1px #ffffff15 solid;
  box-shadow: 1px 1px 5px rgb(255, 255, 255);
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
}
h1 {
  font-size: 1em;
  margin: 0;
}
nav {
  text-decoration: none;
}
.add {
  width: 100%;
  font-size: 0.8em;
  background-color: black;
  color: white;
  border: none;
}
a {
  text-decoration: none;
}
</style>