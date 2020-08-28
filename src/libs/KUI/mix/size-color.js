
import px from './base/px'
import color from './base/color'

const sizecolor = (name='sizecolor', defSize=10, defColor='rgba(0,0,0,0.2)')=>{
    const _size = px(name+'Size', defSize)
    const _color = color (name+'Color', defColor)
    const res = {
        props:    { ..._size.props, ..._color.props },
        computed: { 
            ..._size.computed, 
            ..._color.computed,
            [name+'Stl'](){
                return {
                    ...this[name+'SizeStl'],
                    ...this[name+'ColorStl'],
                }
            }
        },
    }
    return res
}
export default sizecolor