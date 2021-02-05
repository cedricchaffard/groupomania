<template>
  <form @submit="submitComment">
    <div class="conteneur_modal">
      Créer un commentaire : {{ post.title }}
      <label for="commentaire"></label>
      <input
        type="text"
        id="name"
        name="name"
        required
        style="width: 100%; height: 100px"
        placeholder="Votre commentaire"
      />
      <div class="publish_layout">
        <button type="submit" class="publish">Publier</button>
        <router-link to="/" class="cancel">Annuler</router-link>
      </div>
    </div>
    <div class="background_modal" @click="close"></div>
  </form>
</template>

<script>
export default {
  name: "CommentModal",
  props: {
    close: Function,
    post: Object,
    addComment: Function,
  },
  methods: {
    submitComment(e) {
      e.preventDefault();
      this.addComment(this.post.id, e.target.name.value);
    },
  },
};
</script>

<style scoped>
.conteneur_modal {
  width: 30%;
  min-height: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
input {
  max-width: 80%;
  min-height: 150px;
}
input:placeholder-shown {
  top: 0;
}
button {
  background-color: rgb(255, 255, 255);
  border: none;
}
.cancel {
  text-decoration: none;
  margin: 2vh;
  color: black;
  font-size: 0.8em;
  cursor: default;
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
.publish_layout {
  display: flex;

  align-items: stretch;
  margin-top: 2vh;
}

@media (max-width: 375px) {
  .conteneur_modal {
    width: 85%;
    padding-right: 2vh;
    padding-bottom: 0;
    min-height: 200px;
  }
}

@media (max-width: 768px) {
  .publish {
    width: 100%;
  }
  .conteneur_modal {
    width: 50%;
    padding-right: 2vh;
    padding-bottom: 0;
    min-height: 200px;
  }
}
</style>