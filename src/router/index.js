import Vue from 'vue'
import Router from 'vue-router'
import loginComponent from '../pages/login'
import homeComponent from '../pages/home'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/login'},//重定向
    {path:'/login',component:loginComponent},
    {path:'/home',componet:homeComponent},
  ]
})
