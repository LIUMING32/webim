import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/home'
import Message from '@/components/pages/livchat/message'
import AddressList from '@/components/pages/livchat/addresslist'
import Login from '@/components/login'
import Regist from '@/components/regist'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home2',
      component: Home
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      children:[
	      {
		      path: '/',
		      name: 'message2',
		      component: Message
		    },{
		      path: '/message/addresslist',
		      name: 'addresslist',
		      component: AddressList
		    }
	    ]
    },
  ]
})
