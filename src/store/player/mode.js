
const   SINGLE  = 'SINGLE',
        LIST    = 'LIST',
        RANDOM  = 'RANDOM'
const cycleArray = [SINGLE, LIST, RANDOM]

const getPlayModeByIndex = (index)=>{
    return  cycleArray[index%(cycleArray.length)]
}
const getIndexByPlayMode = (mode)=>{
    return cycleArray.indexOf(mode)
}
const config = {
    state:{
        playMode: SINGLE
    },
    getters:{
        getPlayModeIndex(state){
            return getIndexByPlayMode(state.playMode)
        }
    },
    mutations:{
        changePlayMode(state){
            let curIndex = getIndexByPlayMode(state.playMode)
            state.playMode = getPlayModeByIndex(curIndex+1)
        }
    },
    actions:{

    },
    modules:{

    }
}
export default config