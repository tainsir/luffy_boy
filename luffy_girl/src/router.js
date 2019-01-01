import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Course from './views/Course.vue'
import CourseDetail from './views/CourseDetail.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
       {
      path: '/course',
      name: 'course',
      component: Course
    },
             {
      path: '/courseDetail/:id',
      name: 'courseDetail',
      component: CourseDetail
    },
     {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
