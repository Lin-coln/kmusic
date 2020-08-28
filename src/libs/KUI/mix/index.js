import text from './base/text'
import boolean from './base/boolean'
import number from './base/number'
import pxString from './base/pxString'
import pxArray from './base/pxArray'
import px from './base/px'
import em from './base/em'
import ms from './base/ms'
import precent from './base/precent'
import enumm from './base/enum'
import color from './base/color'

import sizecolor from './size-color'

const duration = (def=200)=>{ return ms('duration', def) }
const width  = (def='100%')=>{ return pxString('width', def) }
const height = (def='100%')=>{ return pxString('height', def) }
const padding = (def=16)=>{ return pxArray('padding', def) }
const radius = (def=16)=>{ return pxArray('radius', def) }
const shadowOffset = (def=10)=>{ return px('shadowOffset', def) }
const border = (defSize=2, defColor='rgba(0,0,0,0.4)')=>{
    return sizecolor('border', defSize, defColor)
}
const borderHover = (defSize=2, defColor='rgba(0,0,0,0.4)')=>{
    return sizecolor('borderHover', defSize, defColor)
}
const borderPress = (defSize=2, defColor='rgba(0,0,0,0.4)')=>{
    return sizecolor('borderPress', defSize, defColor)
}
const shadow = (defSize=10, defColor='rgba(0,0,0,0.2)')=>{
    return sizecolor('shadow', defSize, defColor)
}
const shadowHover = (defSize=16, defColor='rgba(0,0,0,0.4)')=>{
    return sizecolor('shadowHover', defSize, defColor)
}
const shadowPress = (defSize=10, defColor='rgba(0,0,0,0.6)')=>{
    return sizecolor('shadowPress', defSize, defColor)
}

const blurSize = (def=10)=>{ return px('blurSize', def) }

const mix = {
    text,
    boolean,
    number,
    px,
    pxString,
    pxArray,
    em,
    ms,
    precent,
    enumm,
    color,

    sizecolor,

    duration, 
    width, 
    height, 
    padding, 
    radius, 
    blurSize,
    border,
    borderHover,
    borderPress,
    shadowOffset,
    shadow,
    shadowHover,
    shadowPress,
}
export {
    text,
    boolean,
    number,
    px,
    pxString,
    pxArray,
    em,
    ms,
    precent,
    enumm,
    color,

    sizecolor,

    duration, 
    width, 
    height, 
    padding, 
    radius, 
    blurSize,
    border,
    borderHover,
    borderPress,
    shadowOffset,
    shadow,
    shadowHover,
    shadowPress,

    mix
}