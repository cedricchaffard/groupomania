<template>
  <div>
    <!-- <App v-if="user" />
    <LoginForm v-else :errorMessage="errorMessage" @submit="login" /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { login } from "../authentication";
// import App from "../vues/App.vue";
// import LoginForm from "../vues/LoginForm";

export default {
  data() {
    return {
      user: null,
      errorMessage: ""
    };
  },
  methods: {
    login({ email, password }) {
      this.user = login(email, password);
      this.errorMessage = this.user ? "" : "Authentication failed, please try again";
    }
  },

  // components: { App, LoginForm }
};
</script>