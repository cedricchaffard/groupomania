<template>
  <div>
    <div class="conteneur_modal">
      Créer un commentaire
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
        <button class="publish">Publier</button>
        </div>
    </div>
    <div class="background_modal" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: "CommentModal",
  props: {
    close: Function,
  },
};
</script>

<style scoped>
.conteneur_modal {
  width: 25%;
  min-height: 300px;
  background-color: white;
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

.publish_layout{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vh;
}
.publish{
  width: 50%;
}
</style>