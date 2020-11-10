<template>
<div>
  <ul>
    <li v-for="photo in photos" :key="photo.id">
      <div id="pics">{{ photo.image }}</div>
    </li>
  </ul>
  <div>
    <button class="add">
      <router-link to="/AddPost">+ Add a new Post</router-link>
    </button>
  </div>
  </div>
</template>

<script>
export default {
  name: "Photos",
  props: {
    photos: Array,
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
  border: 0.1px #ffffff70 solid;
  background-color: rgba(0, 0, 0, 0.92);
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  margin-bottom: 2vh;
}

li {
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: rgb(35, 142, 184);
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
}

.add{
  width: 100%;
  font-size: .8em;
}

a {
    text-decoration: none;
}

</style>