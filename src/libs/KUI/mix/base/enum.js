import { prop, mix, stl } from './mixFactory'

export default (name='enum', def='enum')=>{
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