<template>
    <div :class="'scrollLayout-root '+directionClass" 
        ref='layout' 
        :style="style"
        ondragstart="return false;"
        >
        <slot></slot>
    </div>
</template>

<script>
import format from './../util/format'
import { duration, padding, color } from './../mix'
export default{
    mixins: [ duration(), padding(), color('bgColor', 'transparent') ],
    name: 'ScrollLayout',
    props: {
        showThumb:      { type: Boolean, default: false },
        thumbRadius:    { type: Boolean, default: false },
        thumbSize:      { type: Number, default: 8 },
        thumbColor:     { type: String, default: 'rgba(0, 0, 0, 0.2)' },
        axis:           { type: String, default: 'Y' },
    },
    computed:{
        thumbStyle(){
            return {
                '--thumbRadius': format.prop(((this.showThumb&&this.thumbRadius)?(this.thumbSize/2):0), 'px'),
                '--thumbSize':   format.prop((this.showThumb?this.thumbSize:0), 'px'),
                '--thumbColor':  this.showThumb?this.thumbColor:'transparent',
            }
        },
        style(){
            return {
                ...this.thumbStyle,
                ...this.durationStl,
                ...this.paddingStl,
                ...this.bgColorStl,
            }
        },
        directionClass(){
            return  this.axis==='Y'
                    ? 'scrollLayout-scrollY'
                    : 'scrollLayout-scrollX'
        },
    },
    methods: {
        scroll(event){
            this.$emit('handleScroll', event, this.$refs.layout)
        },
    },
    mounted() {
        this.$refs.layout.addEventListener('scroll', this.scroll)
    },
    beforeDestroy(){
        this.$refs.layout.removeEventListener('scroll', this.scroll)
    },
}
</script>

<style scoped lang='scss'>
.scrollLayout-root{
    $thumbSize: var(--thumbSize);      
    $thumbColor: var(--thumbColor);    
    $thumbRadius: var(--thumbRadius);  
    $padding: var(--padding);
    $duration: var(--duration);
    $bgColor: var(--bgColor);


    box-sizing: border-box;
    padding: $padding;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: $bgColor;
    
    -webkit-user-drag: none;
    pointer-events: auto;
    position: relative;
    transition: $duration all ease-in-out;

    &::-webkit-scrollbar { 
        width:  $thumbSize;
        height: $thumbSize;
        background-color: transparent; 
    }
    &::-webkit-scrollbar-thumb { 
        width: $thumbSize; 
        border-radius: $thumbRadius;
        background-color: $thumbColor;
    }   
    &::-webkit-scrollbar-track {
        color: transparent; 
    }
}
.scrollLayout-scrollY{
    display: -webkit-box;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-align: center;
}
.scrollLayout-scrollX{
    display: -webkit-box;
    overflow-y: hidden;
    overflow-x: scroll;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
}
</style>


