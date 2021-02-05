import Vue from 'vue'
import router from './router'
import AuthWrapper from "./vues/AuthWrapper";
import "@fortawesome/fontawesome-free/css/all.css"

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(AuthWrapper),
}).$mount('#app')