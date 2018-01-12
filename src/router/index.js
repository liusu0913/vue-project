import Vue from 'vue'
import Router from 'vue-router'
const login = ()=>import('@/components/login');
const detail = ()=>import('@/components/detail');
const HelloWorld = ()=>import('@/components/HelloWorld');

Vue.use(Router)

const router = new Router({
	
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/l',
      name: 'login',
      component: login
    },
    {
      path: '/d',
      name: 'detail',
      component: detail
    }
  ]
})
