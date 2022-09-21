import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateNewPost from '../views/CreateNewPost.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import PostDetails from '../views/PostDetails.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import NotFound from '../views/NotFound.vue'
import search from '../views/search.vue'

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
    path: '/posts/:id',
    name: 'PostDetails',
    component: PostDetails,
    props: true
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/search',
    name: 'searc',
    component: search
  },
  // {
  //   path: '/education',
  //   name: 'Education',
  //   component: Education
  // },
  // {
  //   path: '/jobs',
  //   name: 'Jobs',
  //   component: Jobs
  // },
  // {
  //   path: '/howTo',
  //   name: 'howTo',
  //   component: howTo
  // },
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
