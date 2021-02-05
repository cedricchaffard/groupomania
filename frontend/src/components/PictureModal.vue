<template>
  <div>
    <div class="conteneur_modal">
      <img v-if="post.image" :src="postimage(post.image)" />
    </div>
    <div class="background_modal" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: "PictureModal",
  props: {
    close: Function,
    post: Object,
  },
  methods: {
    postimage(image) {
      if (image) {
        return "http://localhost:3000/images/" + image;
      }
    },
  },
};
</script>

<style scoped>
.conteneur_modal {
  width: 80%;
  min-height: 600px;
  /* background-color: white; */
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  padding: 1vh;
  display: flex;
  flex-direction: column;
}
.background_modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.89);
  top: 0;
  left: 0;
  z-index: 9999;
}

@media (max-width: 375px) {
  .conteneur_modal {
    min-width: 85%;
    min-height: 200px;
  }
}
@media (max-width: 768px) {
  .conteneur_modal {
    width: 85%;
    min-height: 200px;
  }
}
</style>