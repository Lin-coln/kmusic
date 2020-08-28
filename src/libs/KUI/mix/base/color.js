import { prop, mix, stl } from './mixFactory'

export default (name='color', def='rgba(0,0,0,0.5)')=>{
    return {
        props: {
            ...prop(String, name, def),
        },
        computed:{
            ...mix(name),
            ...stl(name, ''),
        },
    }
}