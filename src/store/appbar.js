
const   NORMAL  = 'NORMAL',
        MINI    = 'MINI'
const statusArray = [NORMAL, MINI]

const getStatusByIndex = (index)=>{
return  statusArray[index%(statusArray.length)]   
}
const getIndexByStatus = (status)=>{
return statusArray.indexOf(status)
}

const   LIGHT = "LIGHT",
        DARK = "DARK"
const   titleThemeArray = [LIGHT, DARK]
const getTitleThemeByIndex = (index)=>{
    return  titleThemeArray[index%(titleThemeArray.length)]   
}
const getIndexByTitleTheme = (theme)=>{
    return titleThemeArray.indexOf(theme)
}

const config = {
state:{
    appbarStatus: MINI,
    appbarTitle: "Explore",
    appbarTitleTheme: LIGHT,
},
getters:{
    getAppbarStatusIndex(state){
        return getIndexByStatus(state.appbarStatus)
    },
    getAppbarTitleThemeIndex(state){
        return getIndexByTitleTheme(state.appbarTitleTheme)
    },
},
mutations:{
    setAppbarTitleThemeByIndex(state, index){
        state.appbarTitleTheme = getTitleThemeByIndex(index)
    },
    setAppbarStatusByIndex(state, index){
        state.appbarStatus = getStatusByIndex(index)
    },
    setAppbarTitle(state, title){
        state.appbarTitle = title
    }
},
actions:{

},
modules:{

}
}
export default config