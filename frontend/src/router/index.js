import Vue from 'vue' 
import Router from 'vue-router' 
import LoginForm from '../vues/LoginForm'
import Sign_In from '../vues/Sign_Up'
import App from '../vues/App'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
        path: '/LoginForm',
        name: 'LoginForm',
        component: LoginForm
    },
    {
        path: '/Sign_Up',
        name: 'Sign_Up',
        component: Sign_In
    }
  ]
})