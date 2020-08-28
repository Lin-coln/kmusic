

export default{
    isSide(value){
        return (['left', 'top', 'right', 'bottom'].indexOf(value)!=-1)
    },
    isCorner(value){
        return (['lt', 'rt', 'lb', 'rb'].indexOf(value)!=-1)
    },
    isAxis(value){
        return (['X', 'Y'].indexOf(value)!=-1)
    },
    isAlign(value){
        return (['start', 'center', 'end'].indexOf(value)!=-1)
    },
    isPercent(value){
        return  this.isString(value) && 
                value.slice(value.length-1, value.length)==='%' &&
                this.isNumber(Number(value.slice(0, -1)))
    },
    isPx(value){
        return  this.isString(value) && 
                value.slice(value.length-2, value.length)==='px' &&
                this.isNumber(Number(value.slice(0, -2)))
    },
    isEm(value){
        return  this.isString(value) && 
                value.slice(value.length-2, value.length)==='em' &&
                this.isNumber(Number(value.slice(0, -2)))
    },
    isAuto(value){
        return  value==='auto'
    },
    isMs(value){
        return  this.isString(value) && 
                value.slice(value.length-2, value.length)==='ms' &&
                this.isNumber(Number(value.slice(0, -2)))
    },



    isNumber(value){
        return (typeof value).toLowerCase() === 'number' 
                && !isNaN(value)
    },
    isArray(value){
        return Array.isArray(value)
    },
    isString(value){
        return (typeof value).toLowerCase() === 'string';
    },
    
}