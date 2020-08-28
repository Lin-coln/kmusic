
const   EXPLORE     = 'Explore',
        CLOUD       = 'Cloud',
        LOCAL       = 'Local',
        PLAYLIST    = 'Playlist',
        FAVORITE    = 'Favorite'
const pageArray = [EXPLORE, CLOUD, LOCAL, PLAYLIST, FAVORITE]

const getPageByIndex = (index)=>{
    return  pageArray[index%(pageArray.length)]   
}
const getIndexByPage = (page)=>{
    return pageArray.indexOf(page)
}

import router from './../router'
const config = {
state:{
    currentPage: EXPLORE
},
getters:{
    getCurrentPageIndex(state){
        return getIndexByPage(state.currentPage)
    },
    getIndexByPage: (state)=>(page)=>{
        return getIndexByPage(page)
    }
},
mutations:{
    setCurrentPageByIndex(state, index){
        state.currentPage = getPageByIndex(index)

        state.appbarTitle = state.currentPage
        router.replace(state.currentPage.toLowerCase())
    },
},
actions:{

},
modules:{

}
}
export default config