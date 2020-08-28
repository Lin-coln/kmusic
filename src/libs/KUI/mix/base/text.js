import { prop, mix } from './mixFactory'

export default (name='text', def='text')=>{
    return {
        props: {
            ...prop(String, name, def),
        },
        computed:{
            ...mix(name),
        }, 
    }
}