<template>
    <div :class="['Image-root', rotateMix]" :style="{...style, ...maskStyle}">
        <img 
            width="300" height="300"
            class='Image-item' 
            :style="filterStyle" 
            :src="imgSrc">
    </div>
</template>

<script>
import {mix} from './../mix'
export default {
    name:'KImage',
    mixins: [ 
        mix.duration(),
        mix.width(300),
        mix.height(300),
        mix.boolean('asset', false),
        mix.text('src', 'no src'),
        mix.boolean('alignWidth',  false, '100%', 'auto'),
        mix.boolean('alignHeight', false, '100%', 'auto'),
        mix.color('bgColor', 'transparent'),
        mix.boolean('rotate', false, 'Image-rotate', ''),
    ],
    computed:{
        imgSrc(){
            return  this.assetMix
                    ? require('@/assets/'+this.srcMix)
                    : this.srcMix
        },
        style(){
            return {
                ...this.opacityStl,
                ...this.widthStl,
                ...this.heightStl,
                ...this.alignWidthStl,
                ...this.alignHeightStl,
                ...this.durationStl,
                ...this.bgColorStl,
            }
        },
        filterStyle(){
            return {}
        },
        maskStyle(){
            return {}
        }
    }
}
</script>

<style lang="scss" scoped>

.Image-root{
    $width: var(--width);
    $height: var(--height);
    $alignWidth: var(--alignWidth);
    $alignHeight: var(--alignHeight);
    $duration: var(--duration);
    $bgColor: var(--bgColor);

    -webkit-user-drag: none;
    -webkit-user-select: none;
    pointer-events: none;
    width: $width;
    height: $height;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all $duration ease-in-out;
    background-color: $bgColor;

    & > .Image-item{
        width: $alignWidth;
        height: $alignHeight;
        transition: all $duration ease-in-out;
    }

    &.Image-rotate{
        animation: 15000ms rotate infinite linear;
    }

    @keyframes rotate{
    0%{
        transform: rotateZ(0deg);
    }
    100%{
        transform: rotateZ(360deg);
    }
}
}


</style>