import Vue from 'vue'
import Router from 'vue-router'

//路径中@与.的区别
//./相对路径
//@/  webpack定义的src文件夹
// import HelloWorld from '@/components/HelloWorld'
import Home from '../components/Home'
import About from '../components/About'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', 
      redirect: 'home' 
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})
