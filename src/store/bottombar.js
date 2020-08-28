
const   NORMAL  = 'NORMAL',
        FULL    = 'FULL'
const statusArray = [NORMAL, FULL]

const getStatusByIndex = (index)=>{
    return  statusArray[index%(statusArray.length)]   
}
const getIndexByStatus = (status)=>{
    return statusArray.indexOf(status)
}

const config = {
state:{
    bottombarStatus: NORMAL
},
getters:{
    getBottombarStatusIndex(state){
        return getIndexByStatus(state.bottombarStatus)
    }
},
mutations:{
    changeBottombarStatus(state){
        let curIndex = getIndexByStatus(state.bottombarStatus)
        state.bottombarStatus = getStatusByIndex(curIndex+1)
    }
},
actions:{

},
modules:{

}
}
export default config