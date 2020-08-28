import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// import winbtn from './winbtn'
import bottombar from './bottombar'
import player from './player'
import page from './page'
import appbar from './appbar'
import drawerbar from './drawerbar'


const store = new Vuex.Store({
    state:{
        ...bottombar.state,
        ...player.state,
        ...page.state,
        ...appbar.state,
        ...drawerbar.state,
    },
    mutations:{
        // ...winbtn,
        ...bottombar.mutations,
        ...player.mutations,
        ...page.mutations,
        ...appbar.mutations,
        ...drawerbar.mutations,
    },
    getters:{
        ...bottombar.getters,
        ...player.getters,
        ...page.getters,
        ...appbar.getters,
        ...drawerbar.getters,
    },
    actions:{
        ...bottombar.actions,
        ...player.actions,
        ...page.actions,
        ...appbar.actions,
        ...drawerbar.actions,
    },
    modules:{
        ...bottombar.modules,
        ...player.modules,
        ...page.modules,
        ...appbar.modules,
        ...drawerbar.modules,
    }
})

export default store