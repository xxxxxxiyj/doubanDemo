import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '../views/PagesView'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/pages/'
    },
    {
      path: '/pages',
      component: PagesView
    }
  ]
})
