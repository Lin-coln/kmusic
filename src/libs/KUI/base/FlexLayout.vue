<template>
    <div 
    :class="'flexLayout-root '+sideClass"
    :style="style"
    ondragstart="return false;">
        <div class="flexLayout-fill">
        </div>
        <div class="flexLayout-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import format from './../util/format'
import { duration } from './../mix';
export default {
    mixins: [ duration() ],
    name: 'FlexLayout',
    props:{
        status:     { type: Boolean, default: false },
        side:       { type: String, default: 'left' },
        length:     { type: Number, default: 300 },
        
    },
    computed:{
        sideClass(){
            var a = ['left', 'top', 'right', 'bottom'].indexOf(this.side)!=-1
            return (a)?('flexLayout-'+this.side):''
        },
        style(){
            return {
                '--length': format.prop(this.status?this.length:0, 'px'),
                
                ...this.durationStl,
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.flexLayout-root{
    $length: var(--length);
    $duration: var(--duration);
    display: flex;
    transition: all $duration ease-in-out;
    width: 100%;
    height: 100%;
    &.flexLayout-left{
        flex-direction: row;
        & > .flexLayout-fill{
            width: $length;
            height: 100%;
        }
    }
    &.flexLayout-right{
        flex-direction: row-reverse;
        & > .flexLayout-fill{
            width: $length;
            height: 100%;
        }
    }
    &.flexLayout-top{
        flex-direction: column;
        & > .flexLayout-fill{
            width: 100%;
            height: $length;
        }
    }
    &.flexLayout-bottom{
        flex-direction: column-reverse;
        & > .flexLayout-fill{
            width: 100%;
            height: $length;
        } 
    }
    & > .flexLayout-fill{
        transition: all $duration ease-in-out;
        background-color: transparent;
    } 
    & > .flexLayout-container{
        -webkit-user-drag: none;
        pointer-events: auto;
        position: relative;

        // overflow: hidden;
        transition: all $duration ease-in-out;
        width: 100%;
        flex: 1;
    }
}
</style>