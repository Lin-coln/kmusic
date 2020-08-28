import format from './../../util/format'
import validator from './../../util/validator'

const prop = (tp, name, def)=>{
    return {
        [name]:  { 
            type: tp, 
            default: def
        }
    }
}
const mix = (name)=>{
    return {
        [name+'Mix'](){ return this[name] }
    }
}
const stl = (name, unit)=>{
    return {
        [name+'Stl'](){ 
            return {
                ['--'+name]: format.prop(this[name+'Mix'], unit),
            }
        },
    }
}


export { prop, mix, stl }