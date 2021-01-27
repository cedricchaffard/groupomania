<template>
  <header>
    <div class="mask">
         <button class="add">
      <router-link tag="mod" to="/AddPost">+ Add a new Post</router-link>
         </button>
         </div>
    <div class="layout">
      <a href="/">
        <img
          src="../assets/images/groupomania_Logos/icon-left-font-monochrome-black.png"
        />
      </a>
      <div class="infos">
        <Infos :infos="infos"> </Infos>
      </div>
      <div class="logout">
        <button>
          <router-link to="/LoginForm">Log Out</router-link>
        </button>
      </div>
    </div>
  </header>
   
</template>

<script>
import Infos from "./Infos";

export default {
  name: "HeaderConnected",
  components: {
    Infos,
  },
  props: {
    infos: Array,
  },
};
</script>

<style scoped>
.add {
  display: none;
}
header {
  position: fixed;
  height: 150px;
  top: 0;
  width: 100%;
}

header > .layout {
  z-index: 10000;
}

.mask {
  background-color: rgba(0, 0, 0, 0.92);
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 30%;
}

img {
  width: 200px;
  filter: invert(100%);
}

header .layout {
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.infos {
  position: relative;
  z-index: 10000;
}

.connection {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
}

@media (max-width: 375px) {
    .add {
    display: initial;
    font-size: 1em;
    border: 0.1px #ffffff3a solid;
    /* width: inherit; */
    background-color: black;
    color: white;
    margin-bottom: 0;
    margin-top: 2vh;
  }
  .mask {
    background-color: rgba(0, 0, 0, 1);
  }
}
.infos {
  display: none;
}

@media (max-width: 768px) {
  .infos {
    display: none;
  }
}
</style>