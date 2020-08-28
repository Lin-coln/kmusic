import { prop, mix, stl } from './mixFactory'

export default (name='ms', def=200)=>{
    return {
        props: {
            ...prop(Number, name, def),
        },
        computed:{
            ...mix(name),
            ...stl(name, 'ms'),
        }, 
    }
}