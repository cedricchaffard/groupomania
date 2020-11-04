<template>
  <header>
    <div class="mask"></div>
    <div class="layout">
      <img
        src="../assets/images/groupomania_Logos/icon-left-font-monochrome-black.png"/>
      <!-- <div class="infos">
        <div class="connection">
          <button>
            <router-link to="/LoginForm">LOGIN</router-link>
          </button>
          <button class="signin">
            <router-link to="/Sign_In">SIGN UP</router-link>
          </button>
        </div>
      </div> -->
    </div>
  </header>
</template>

<script>

export default {
  name: "HeaderNotConnected",
};
</script>

<style scoped>
header {
  position: fixed;
  height: 150px;
  z-index: 1000;
  top: 0;
  width: 100%;
  background-color: black;
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
    z-index: 1000;

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
</style>