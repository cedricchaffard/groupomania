<template>
  <ul>
    <i class="fas fa-circle-notch"></i
    >Online
    <li v-for="contact in contacts" :key="contact.id">
      <i class="fas fa-user"></i><br />
      <div>{{ contact.name }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Contacts",
  props: {
    contacts: Array,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  border-radius: 4px;
  border: 0.1px #ffffff70 solid;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
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