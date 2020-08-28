import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [
    { 
        path: '', 
        redirect: '/explore' 
    },
    {   
        path: '/explore',
        component: () => import('./../components/pages/explore')
    },
    {
        path: '/cloud',
        component: () => import('./../components/pages/cloud')
    },
    {
        path: '/local',
        component: () => import('./../components/pages/local')
    },
    {
        path: '/playlist',
        component: () => import('./../components/pages/playlist')
    },
    {
        path: '/favorite',
        component: () => import('./../components/pages/favorite')
    },
]

export default new VueRouter({
    routes, mode: 'hash'
})