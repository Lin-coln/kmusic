import { prop, mix, stl } from './mixFactory'

export default (name='number', def=0)=>{
    return {
        props: {
            ...prop(Number, name, def),
        },
        computed:{
            ...mix(name),
            ...stl(name, ''),
        }, 
    }
}