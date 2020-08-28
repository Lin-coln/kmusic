import { prop, mix, stl } from './mixFactory'

export default (name='pxArray', def=0)=>{
    return {
        props: {
            ...prop([Number, Array], name, def),
        },
        computed:{
            ...mix(name),
            ...stl(name, 'px'),
        }, 
    }
}