<template>
  <div id="app">
    <HeaderConnected></HeaderConnected>
    <div class="layout">
      <h1>Add a new Post</h1>
      <form>
        Title<input type="title" /> Description<input type="description" />
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPost",
};
</script>

<style scoped>
.layout {
  /* border: 2px red solid; */
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  width: 10%;
  justify-content: center;
  align-items: center;
}
</style>

