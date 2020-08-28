import { prop, mix, stl } from './mixFactory'

export default (name='boolean', def=false, objTrue=true, objFalse=false)=>{
    return {
        props: {
            ...prop(Boolean, name, def),
        },
        computed:{
            [name+'Mix'](){ 
                return this[name]? this[name+'True'] : this[name+'False']
            },
            [name+'True']() { return objTrue },
            [name+'False'](){ return objFalse },
            ...stl(name, ''),
        }, 
    }
}