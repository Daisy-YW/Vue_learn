import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import News from '@/components/News'
import Message from '@/components/Message'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:"/home",
          redirect:"news"
        },
        {
          // 这里不使用/,/代表根目录
          path:"news",
          component:News
        },
        {
          path:"message",
          component:Message
        }
      ]
    }
  ]
})
