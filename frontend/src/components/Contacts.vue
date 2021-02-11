<template>
  <div>
    <ul>
      <i class="fas fa-circle-notch"></i>
      <h1>Collaborateurs inscrits</h1>
      <li v-for="user in users" :key="user.id">
        {{ user.first_name + " " + user.last_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getUsers } from "../api";

export default {
  name: "Users",
  data() {
    return {
      users: [],
    };
  },
  created() {
    getUsers().then((users) => {
      this.users = users;
    });
  },
};
</script>

<style scoped>
h1 {
  font-size: 1em;
  display: inline;
}
ul {
  list-style: none;
  padding-left: 0;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
  border: 0.1px #ffffff15 solid;
  box-shadow: 1px 1px 5px rgb(255, 255, 255);
  height: auto;
  overflow-y: scroll;
}

li {
  border-radius: 4px;
  position: relative;
  margin: 10px;
  display: flex;
  margin-top: 20px;
}

i {
  margin-right: 10px;
}

.fa-circle-notch {
  color: green;
}
</style>