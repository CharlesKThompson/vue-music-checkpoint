import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import Home from '@/components/Home'
//@ts-ignore
import Itunes from '@/components/Itunes'
//@ts-ignore
import Mytunes from '@/components/MyTunes'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/api/itunes',
            name: 'Itunes',
            component: Itunes
        },
        {
            path: '/api/mytunes',
            name: 'MyTunes',
            component: Mytunes
        }
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: Login
        // },
        
    ]
})