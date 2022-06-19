import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateNewPost from '../views/CreateNewPost.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import SinglePost from '../views/Posts/SinglePost.vue'
import Posts from '../views/Posts/Posts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createnewpost',
    name: 'CreateNewPost',
    component: CreateNewPost
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/:id',
    name: 'SinglePost',
    component: SinglePost
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
