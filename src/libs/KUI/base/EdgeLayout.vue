<template>
    <div :class="'edgeLayout-root '+sideClass" 
        :style='style'
        ondragstart="return false;"
        >
        <div :class="'edgeLayout-container '+flexDirectionClass">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import format from './../util/format'
import { duration, px, pxString, boolean, enumm } from './../mix';
export default {
    mixins: [ 
        duration(), 
        enumm('side', 'left'),
        px('marginInside', 0),
        pxString('marginAside', 0),
        boolean('fill', false),
    ],
    name:'EdgeLayout',
    props: {
        zIndex:     { type: Number, default: 1 },
    },
    computed: {
        isVertical(){
            return ['left', 'right'].indexOf(this.sideMix)!=-1
        },
        style(){
            return {
                '--zIndex': (this.zIndex<=0)?'auto':this.zIndex,
                '--width':  this.isVertical?'auto':'100%',
                '--height': this.isVertical?'100%':'auto',

                ...this.marginInsideStl,
                ...this.marginAsideStl,
                ...this.durationStl,
            }
        },
        flexDirectionClass(){
            var a = (this.fillMix && this.isVertical) || (!this.fillMix && !this.isVertical)
            return a?'edgeLayout-row':'edgeLayout-column'
        },
        sideClass(){
            return format.formatSideClass('edgeLayout-', this.sideMix)
        },
    },
}
</script>

<style scoped lang='scss'>
.edgeLayout-root{
    $zIndex: var(--zIndex);
    $duration: var(--duration);
    z-index: $zIndex;

    $width: var(--width);
    $height: var(--height);
    $marginInside: var(--marginInside);
    $marginAside: var(--marginAside);

    width: $width;
    height: $height;
    position: absolute;
    pointer-events: none;
    transition: all $duration ease-in-out;
    &.edgeLayout-left{
        left: $marginInside;
        & > .edgeLayout-container{
            width: auto;
            height: 100%;        
            padding: $marginAside 0
        }
    }
    &.edgeLayout-right{
        right: $marginInside;
        & > .edgeLayout-container{
            width: auto;
            height: 100%;
            padding: $marginAside 0
        }
    }
    &.edgeLayout-top{
        top: $marginInside;
        & > .edgeLayout-container{   
            width: 100%;
            height: auto;
            padding: 0 $marginAside
        }
    }
    &.edgeLayout-bottom{
        bottom: $marginInside;
        & > .edgeLayout-container{   
            width: 100%;
            height: auto;
            padding: 0 $marginAside;
        }
    }
    & > .edgeLayout-column{
        flex-direction: column;
    }
    & > .edgeLayout-row{
        flex-direction: row;
    }

    & > .edgeLayout-container{
        box-sizing: border-box;
        pointer-events: none;
        display: flex;
        justify-content: center;
        // & > *{
        //     pointer-events: auto;
        // }
    }


}
</style>