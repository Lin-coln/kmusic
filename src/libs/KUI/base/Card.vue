<template>
    <div 
        class="card-root" 
        :style='style'>
        <div 
            :class="[
               'card-container', 
                clickableClass, 
                hoverableClass,
                roundClass,
                flatClass,
                strokeClass,
                blurClass,
            ]" 
            @click.self="handle($event)"
            @mouseenter="mouseenter($event)"
            @mouseleave="mouseleave($event)"
            >
            <slot></slot>
        </div>
    </div>
</template>

<script>
import { mix } from './../mix'
export default {
    name: 'Card',
    mixins: [
        mix.duration(), 
        mix.blurSize(0),
        mix.width(),
        mix.height(200),
        mix.padding(), 
        mix.radius(),

        mix.border(0, 'rgba(0,0,0,0.4)'),
        mix.sizecolor('borderHover', 0,  'rgba(0,0,0,0.4)'),
        mix.sizecolor('borderPress', 0,  'rgba(0,0,0,0.4)'),

        mix.shadow     (10, 'rgba(0,0,0,0.2)'),
        mix.shadowHover(16, 'rgba(0,0,0,0.3)'),
        mix.shadowPress(10, 'rgba(0,0,0,0.2)'),

        mix.px('shadowOffset', 0),
        mix.px('shadowOffsetHover', 5),
        mix.px('shadowOffsetPress', 0),

        mix.color('bgColor',        'hsl(0, 0%, 100%)'),
        mix.color('bgColorHover',   'hsl(0, 0%, 98%)'),
        mix.color('bgColorPress',   'hsl(0, 0%, 95%)'),

        mix.enumm('pointerEvents', 'auto')
    ],
    props: {
        clickable: { type: Boolean, default: false },
        hoverable: { type: Boolean, default: false },
        round:     { type: Boolean, default: true },
        flat:      { type: Boolean, default: false },
        stroke:    { type: Boolean, default: false },
    },
    computed:{
        clickableClass(){ return this.clickable?"card-clickable":""
        },
        hoverableClass(){ return this.hoverable?"card-hoverable":""
        },
        
        roundClass(){ return this.round?"card-round":""
        },
        flatClass(){ return this.flat?"":"card-noflat"
        },
        strokeClass(){ return this.stroke?"card-stroke":""
        },
        blurClass(){ return this.blurSizeMix==0?"":"card-blur" },
        style(){
            return {
                ...this.durationStl,
                ...this.blurSizeStl,

                ...this.widthStl,
                ...this.heightStl,
                ...this.paddingStl,
                ...this.radiusStl,

                ...this.borderStl,
                ...this.borderHoverStl,
                ...this.borderPressStl,

                ...this.shadowOffsetStl,
                ...this.shadowOffsetHoverStl,
                ...this.shadowOffsetPressStl,

                ...this.shadowStl,
                ...this.shadowHoverStl,
                ...this.shadowPressStl,

                ...this.bgColorStl,
                ...this.bgColorHoverStl,
                ...this.bgColorPressStl,

                ...this.pointerEventsStl,
            }
        },
    },
    methods:{
        handle(event){
            if(this.clickable){
                this.$emit('handleClick', event)
            }
        },
        mouseenter(event){
            this.$emit('mouseenter', event)
        },
        mouseleave(event){
            this.$emit('mouseleave', event)
        },
    },
}
</script>

<style lang="scss" scoped>
.card-root{
    $duration: var(--duration);
    $blurSize: var(--blurSize);

    $width: var(--width); 
    $height: var(--height);
    $radius: var(--radius);
    $padding: var(--padding);

    $borderSize: var(--borderSize);
    $borderHoverSize: var(--borderHoverSize);
    $borderPressSize: var(--borderPressSize);
    $borderColor: var(--borderColor);
    $borderHoverColor: var(--borderHoverColor);
    $borderPressColor: var(--borderPressColor);

    $shadowOffset: var(--shadowOffset);
    $shadowOffsetHover: var(--shadowOffsetHover);
    $shadowOffsetPress: var(--shadowOffsetPress);
    
    $shadowSize:  var(--shadowSize);
    $shadowColor: var(--shadowColor);
    $shadowHoverSize:  var(--shadowHoverSize);
    $shadowHoverColor: var(--shadowHoverColor);
    $shadowPressSize:  var(--shadowPressSize);
    $shadowPressColor: var(--shadowPressColor);

    $bgColor:   var(--bgColor); 
    $bgColorHover:  var(--bgColorHover); 
    $bgColorPress: var(--bgColorPress);

    transition: all $duration ease-in-out;
    width: $width;
    height: $height;
    position: relative;
    -webkit-user-drag: none;

    pointer-events: var(--pointerEvents);

    & > .card-container{
        transition: all $duration ease-in-out;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: $padding;
        overflow: hidden;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
            
        -webkit-tap-highlight-color: transparent;
        background-color: $bgColor;

        // will-change: backdrop-filter;
        // filter: blur($blurSize);
        // backdrop-filter: blur($blurSize);
        // &.card-blur{
        //     will-change: backdrop-filter;
        //     // filter: blur($blurSize);
        //     backdrop-filter: blur($blurSize);
        // }

        &.card-round{
            border-radius: $radius;
        }
        &.card-noflat{
            box-shadow: 0 $shadowOffset $shadowSize $shadowColor;
        }
        &.card-stroke{
            border-color: $borderColor;
            border-width: $borderSize;
            border-style: solid;
        }
        &.card-hoverable:hover{
            background-color: $bgColorHover;
            &.card-noflat{
                box-shadow: 0 $shadowOffsetHover $shadowHoverSize $shadowHoverColor;
            }
            &.card-stroke{
                border-color: $borderHoverColor;
                border-width: $borderHoverSize;
                border-style: solid;
            }
        }
        &.card-clickable:active{
            background-color: $bgColorPress;
            &.card-noflat{
                box-shadow: 0 $shadowOffsetPress $shadowPressSize $shadowPressColor;
            }
            &.card-stroke{
                border-color: $borderPressColor;
                border-width: $borderPressSize;
            }
        }
    }
}
</style>

