<template>
  <div class="likes">
    <i
      @click="likePost()"
      class="fas fa-heart"
      :class="{ liked: isPostLiked }"
    ></i>
    <div class="like-count">{{ likes }}</div>
  </div>
</template>

<script>
export default {
  name: "Like",
  props: {
    likePost: Function,
    isPostLiked: Boolean,
    likes: Number,
  },
};
</script>

<style scoped>
.fas {
  color: white;
  margin-right: 1vh;
  font-size: .8em;
}

.fas.liked {
  color: red;
  margin: 0;
  margin-right: 1vh;
}

.like-count{
  font-size: .8em;
padding-right: 1vh;
}

@media (max-width: 768px) {
  .likes {
    width: 100%;
    justify-content: flex-end;
  }
}
</style>