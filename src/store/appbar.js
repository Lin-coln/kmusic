
const   NORMAL  = 'NORMAL',
        MINI    = 'MINI'
const statusArray = [NORMAL, MINI]

const getStatusByIndex = (index)=>{
return  statusArray[index%(statusArray.length)]   
}
const getIndexByStatus = (status)=>{
return statusArray.indexOf(status)
}

const config = {
state:{
    appbarStatus: NORMAL
},
getters:{
    getAppbarStatusIndex(state){
        return getIndexByStatus(state.appbarStatus)
    }
},
mutations:{
    changeAppbarStatus(state){
        let curIndex = getIndexByStatus(state.appbarStatus)
        state.appbarStatus = getStatusByIndex(curIndex+1)
    }
},
actions:{

},
modules:{

}
}
export default config