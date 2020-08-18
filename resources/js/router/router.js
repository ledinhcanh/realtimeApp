import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import Signup from '../components/login/signup'
import Forum from '../components/forum/Forum'

const routes = [{
    path: '/login',
    component: Login
},{
    path: '/signup',
    component: Signup
},{
    path: '/forum',
    component: Forum,
    name: 'forum'
},{
    path: '/logout',
    component: Logout,
}
]

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
})

export default router
