<template>
  <div id="slideshow">
    Last Posts
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
  border: 0.1px solid #f0f0ff;
  border-radius: 4px;
  overflow: hidden;
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