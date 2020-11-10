<template>
  <div class="layout">
    <div class="close" @click="close"><i class="fas fa-times"></i></div>
    <div class="view_comment">
      <p>test contenu view</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentView",
  props: {
    close: Function,
  },
};
</script>


<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  border: .5px white solid;
}

.close {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1vh;
}
</style>