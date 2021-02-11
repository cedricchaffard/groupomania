<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { login } from "../authentication";

export default {
  data() {
    return {
      user: null,
      errorMessage: "",
    };
  },
  methods: {
    login({ email, password }) {
      this.user = login(email, password);
      this.errorMessage = this.user
        ? ""
        : "Authentication failed, please try again";
    },
  },
};
</script>