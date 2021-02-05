<template>
  <div id="slideshow">
    <h1>Derniers ajouts</h1>
    <ul id="sContent">
      <li v-for="post in posts" :key="post.id" class="info_details">
        <a href=""> {{ post.title }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getInfos } from "../api";

export default {
  name: "Infos",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    getInfos().then((posts) => {
      this.posts = posts;
    });
  },
};
</script>

<style scoped>
h1 {
  font-size: 0.8em;
  margin-top: 0;
  margin-bottom: 1vh;
}
a {
  text-decoration: none;
  color: white;
  margin-right: 20px;
}
a:hover {
  color: red;
}

#slideshow {
  max-width: 30em;
  border: 0.1px #ffffff15 solid;
  box-shadow: 1px 1px 5px rgb(255, 255, 255);
  border-radius: 4px;
  overflow: hidden;
  height: 6vh;
}

.info_details {
  font-size: 0.8em;
}

#sContent li {
  display: inline;
}

#sContent {
  display: inline-block;
  padding-right: 2em;
  padding-left: 100%;
  white-space: nowrap;
  animation: defilement-rtl 15s infinite linear;
  animation-name: AutoSlide;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  margin: 0;
}
#sContent:hover {
  animation-play-state: paused;
}
@keyframes AutoSlide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>