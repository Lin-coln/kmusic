import mode from './mode'
import music from './music'

export default {
    state:{
        ...mode.state,
        ...music.state,
    },
    getters:{
        ...mode.getters,
        ...music.getters,
    },
    mutations:{
        ...mode.mutations,
        ...music.mutations,
    },
    actions:{
        ...mode.actions,
        ...music.actions,
    },
    modules:{
        ...mode.modules,
        ...music.modules,
    }
}