<template>
    <div 
        :class="'divider-root '+directionClass" 
        :style="style">
        <div class="divider-line"></div>
    </div>
</template>

<script>
import format from './../util/format'
import { mix } from './../mix'
export default {
    mixins: [
        mix.duration(),
        mix.color('color', 'rgba(0,0,0,0.2)'),
        mix.enumm('type', 'solid'),
        mix.px   ('size', 1),
        mix.px   ('paddingVertical', 16),
        mix.px   ('paddingHorizontal', 8),
    ],
    name: 'Divider',
    props:{
        axis:   { type: String, default: 'X'},
    },
    computed:{
        directionClass(){
            return this.axis==='X'?'divider-X':'divider-Y'
        },
        style(){
            return {
                ...this.durationStl,
                ...this.colorStl,
                ...this.typeStl,
                ...this.sizeStl,
                ...this.paddingVerticalStl,
                ...this.paddingHorizontalStl,
            }
        },
    },
}
</script>

<style scoped lang="scss">
.divider-root{
    $lineColor: var(--color);
    $paddingVertical: var(--paddingVertical);
    $paddingHorizontal: var(--paddingHorizontal);
    $size: var(--size);
    $type: var(--type);
    $duration: var(--duration);

    -webkit-user-drag: none;
    pointer-events: none;
    transition: all $duration ease-in-out;
    position: relative;

    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    -webkit-user-select: none;
    & > .divider-line{
        transition: all $duration ease-in-out;
    }
    &.divider-X{
        width: 100%;
        height: calc( 2 * #{$paddingVertical} + #{$size} );
        padding: 0 $paddingHorizontal;
        flex-direction: column;
        & > .divider-line{
            width: 100%;
            height: $paddingVertical;
            border-bottom: $size $type $lineColor;
        }
    }
    &.divider-Y{
        width: calc( 2 * #{$paddingVertical} + #{$size} );
        height: 100%;
        padding: $paddingHorizontal 0;
        flex-direction: row;
        & > .divider-line{
            width: $paddingVertical;
            height: 100%;
            border-right: $size $type $lineColor;
        }
    }
}



</style>