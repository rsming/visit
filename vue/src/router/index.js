import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddressBook from '@/components/AddressBook'
import CV from '@/components/CV'

Vue.use(Router)

export default new Router({
  routes: [
    {
	    path: '/',
	    name: 'Home',
	    component: Home
    },
    {
        path: '/addressBook',
        name: 'AddressBook',
        component: AddressBook
    },
    {
    	path: '/cv',
    	name: 'CV',
    	component: CV
    }
  ]
})
