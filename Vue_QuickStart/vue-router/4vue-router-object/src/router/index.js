import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import Message from '@/components/Message'
import News from '@/components/News'
import NewDetail from '@/components/NewDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:"/home",
      component:Home,
      children:[
        {
          path:"/home",
          redirect:'news'
        },
        {
          path:"news",
          component:News,
          children:[
            {
              path:"newdetail/:id",
              name:"detail",
              component:NewDetail
            }
          ]
        },
        {
          path:"message",
          component:Message
        }
      ]
    },
    {
      path:"/about",
      component:About
    },
  
  ]
})
