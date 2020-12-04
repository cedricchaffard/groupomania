import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '../vues/LoginForm'
import Sign_Up from '../vues/Sign_Up'
import AddPost from '../vues/AddPost'
import ModifyPost from '../vues/ModifyPost'
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
      component: Sign_Up
    },
    {
      path: '/AddPost',
      name: 'AddPost',
      component: AddPost
    },
    {
      path: '/ModifyPost/:id',
      name: 'ModifyPost',
      component: ModifyPost
    },
  ]
})