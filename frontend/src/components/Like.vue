<template>
  <div class="likes">
    <i @click="add()" class="fas fa-heart"></i>
    <div>{{ likes }} likes</div>
  </div>
</template>

<script>
export default {
  name: "Like",
  data() {
    return {
      likes: 0,
    };
  },
  methods: {
    add() {
      this.likes += 1;
    },
  },
};
</script>

<style scoped>
i {
  height: 20px;
  width: 20px;
  color: black;
}

.fas:active {
  color: red;
  margin-right: 0;
}
.likes {
  display: flex;
  justify-content: space-between;
  width: 8vh;
}
</style>