<template>
  <ul>
    <li v-for="photo in photos" :key="photo.id">
      <div id="pics">{{ photo.image }}</div>
    </li>
  </ul>
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

</style>