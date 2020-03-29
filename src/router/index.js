import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/login/Login.vue'
import Home from '../components/home/Home.vue'
import Welcome from '../components/welcome/Welcome.vue'
import Userlist from '../components/user/userList.vue'


Vue.use(VueRouter)
const routes = [
  // 如果访问的是根路劲，就自动重定向到登录页！
  {
    path: "/",
    redirect: '/Login'

  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/Home",
    component: Home,// 只要访问了home就重定向到 
    redirect: "/Welcome",
    children: [
      {
        path: "/Welcome",
        component: Welcome,
      },
      {
        path: "/userList",
        component: Userlist,
      }

    ],

  },



]

const router = new VueRouter({
  routes
})

// 挂载路由导航首位添加路由导航首位
router.beforeEach((to, from, next) => {
  if (to.path === '/Login') return next();
  //从sessionStorage中获取到保存到toke
  let tokenStr = sessionStorage.getItem('token')
  if (!tokenStr) return next('/Login')
  next()
})

export default router
