<template>
  <div>
    <div class="layout">
      <div class="close" @click="close"><i class="fas fa-times"></i></div>
      <div class="view_comment">
        <p v-for="comment in comments" :key="comment"> {{ comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentView",
  components: {},
  props: {
    close: Function,
    comments: Array,
  },
};
</script>


<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  margin-top: 2vh;
  border: 0.5px solid black;
  border-radius: 4px;
}

.close {
  text-align: right;
  margin: 1vh 1vh;
}
p {
  margin: 1vh 1vh;
  text-align: left;
  font-size: 0.8em;
}
</style>