import { prop, mix, stl } from './mixFactory'

export default (name='pxString', def=0)=>{
    return {
        props: {
            ...prop([Number, String], name, def),
        },
        computed:{
            ...mix(name),
            ...stl(name, 'px'),
        }, 
    }
}