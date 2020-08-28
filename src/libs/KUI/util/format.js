import validator from './validator'

const formatSingleValue=(value, type)=>{
    if(validator.isString(value)) return value
    if(!validator.isNumber(value)) {
        return 'err'
    }
    switch(type){
        case 'px':
            return value+'px'
        case '%':
            return value+'%'
        case 'em':
            return value+'em'
        case 'ms':
            return value+'ms'
        case '':
            return value
    }
}
const formatArrayValue=(array, type)=>{
    let result = ''
    if(validator.isArray(type)){
        for(let i=0; i<array.length; i++){
            result += formatSingleValue(array[i], type[i])
            result += ' '
        }
    }else{
        array.forEach(e => {
            result += formatSingleValue(e, type)
            result += ' '    
        });
    }
    return result
}

export default {
    prop(value, type='px'){
        if(validator.isArray(value)){
            return formatArrayValue(value, type)
        }else{
            return formatSingleValue(value, type)
        }
    },
    formatAxisClass(prefix, value, def=''){
        return validator.isAxis(value)?(prefix+value):def
    },
    formatSideClass(prefix, value, def=''){
        return validator.isSide(value)?(prefix+value):def
    },
}