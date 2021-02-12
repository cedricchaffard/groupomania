<template>
  <div>
    <div class="layoutComment">
      <div class="crossLayout">
        <div class="cross">
          <div class="close" @click="close"><i class="fas fa-times"></i></div>
        </div>
      </div>
      <div class="view_comment">
        <p v-for="comment in comments" :key="comment">{{ comment }}</p>
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
.layoutComment {
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  margin-top: 2vh;
  border: 0.5px solid black;
  border-radius: 4px;
  height: 10vh;
}
.cross {
  width: 2vh;
  display: flex;
  justify-content: center;
  padding-right: 2vh;
}
.crossLayout {
  display: flex;
  justify-content: flex-end;
}

.close {
  margin: 1vh 1vh;
  width: 10px;
}
p {
  margin: 1vh 1vh;
  text-align: left;
  font-size: 0.8em;
}

@media (max-width: 375px) {
  .layoutComment {
    margin-top: 0;
    border: 0.5px solid black;
    border-radius: 4px;
  }
}
</style>