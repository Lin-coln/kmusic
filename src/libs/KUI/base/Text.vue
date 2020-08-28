<template>
    <div class="text-root" :style='style'>
        <span 
        :class="'text-container '+isFixedLine" 
        ondragstart="return false;">
            {{ textMix }}
        </span>
    </div>
</template>
<script>
import { 
    boolean, 
    text, 
    number, 
    enumm, 
    color,
    pxString, 
    em,
    precent, 
    duration
} from './../mix';
export default {
    mixins: [
        boolean ('selectable', false, 'text', 'none'),
        text    ('text', 'text'),  
        precent ('lineHeight', 133),
        em      ('size', 1.6),
        pxString('space', 0),
        number  ('lineClamp', 0),
        number  ('weight', 500),
        enumm   ('alignVertical', 'center'),
        enumm   ('alignHorizontal', 'center'),
        color   ('color', 'rgba(0,0,0,0.8)'),
        pxString('width', 'auto'),
        pxString('height', 'auto'),
        duration(),
    ],
    name: 'KText',
    computed:{
        isFixedLine(){
            return this.lineClamp>0?'text-fixed':''
        },
        alignVerticalMix(){
            return  (this.alignVertical=='center')
                    ? this.alignVertical
                    : ('flex-'+this.alignVertical)
        },
        alignHorizontalMix(){
            return  (this.alignHorizontal=='center')
                    ? this.alignHorizontal
                    : ('flex-'+this.alignHorizontal)
        },
        style(){
            return {
                ...{
                    ...this.lineHeightStl,
                    ...this.lineClampStl,
                    ...this.colorStl,
                    ...this.weightStl,
                    ...this.sizeStl,
                },
                ...{
                    '--pointerEvent': this.selectable?'auto':'none',
                    ...this.alignVerticalStl,
                    ...this.alignHorizontalStl,
                    ...this.selectableStl,
                    ...this.widthStl,
                    ...this.heightStl,
                },
                ...this.durationStl,
                ...this.spaceStl,
            }
        }
    },
}
</script>
<style scoped lang="scss">
.text-root{
    $selectable: var(--selectable);
    $pointerEvent: var(--pointerEvent);
    $width: var(--width);
    $height: var(--height);
    $alignVertical: var(--alignVertical);
    $alignHorizontal: var(--alignHorizontal);
    $lineHeight:  var(--lineHeight);
    $size:  var(--size);
    $space: var(--space);
    $weight: var(--weight);
    $color: var(--color);
    $lineClamp: var(--lineClamp);
    $duration: var(--duration);

    transition: all $duration ease-in-out;
    
    -webkit-user-drag: none;
    -webkit-user-select: $selectable;
    pointer-events: $pointerEvent;
    position: relative;

    overflow: hidden;
    width: $width;
    height: $height;
    display: flex;
    justify-content: $alignVertical;
    align-items: $alignHorizontal;
    & > .text-container{
        transition: all $duration ease-in-out;
        width: auto;
        height: auto;
        line-height: $lineHeight;
        font-size:  $size;
        font-weight: $weight;
        color: $color;
        overflow: hidden;

        letter-spacing: $space;
    }
    & > .text-fixed{
        display: -webkit-box;
        -webkit-line-clamp: $lineClamp;
        -webkit-box-orient: vertical;
        overflow-wrap: anywhere;
    }
}

</style>