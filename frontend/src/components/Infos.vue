<template>
  <div id="infos_layout">
    Last Posts
    <div id="precedent" onclick="ChangeSlide(-1)"></div>
    <div v-for="info in infos" :key="info.id" id="info_details">
      {{ info.details }}
    </div>
    <div id="suivant" onclick="ChangeSlide(1)">></div>
  </div>
</template>

<script>
export default {
  name: "Infos",
  props: {
    infos: Array,
  },
};
</script>

<style scoped>
#infos_layout {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 0.1px #ffffff70 solid;
  background-color: rgba(0, 0, 0, 0.92);
  color: white;
}

#info_details {
  height: 5px;
  /* width: 200px; */
  /* border: 1px black solid; */
  margin-top: 20px;
  padding: 10px;
  overflow: hidden;
}
</style>