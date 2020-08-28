<template>
<div class="toggler-root" :style='style'>
    <label class="toggler-label">
        <input class="toggler-input" type="checkbox" 
            :checked='status' 
            @input='handle($event)'>
        <span class="toggler-button"></span>
    </label>
</div>
</template>

<script>
import format from './../util/format'
import { duration } from './../mix';
export default {
    mixins: [ duration() ],
    name: 'Toggler',
    props:{
        width: Number, height: Number, 
        colorActive:    { type: String, default: '#30D158' },
        colorInactive:  { type: String, default: '#E9E9E9' },
        colorToggle:    { type: String, default: '#ffffff' },
        status:         { type: Boolean, default: false },
        
        duration: { type: Number, default: 200 },
    },
    computed:{
        buttonSizeStyle(){
            var bh = 36;
            if(this.height) bh = this.height
            if(this.width)  bh = this.width*0.59
            if(this.width && this.height)
                bh = (this.height/this.width < 0.59)? this.height : this.width*0.59;
            var bw = bh / 0.59;
            var td = bw * 0.51;
            var tw = bw * 0.67;
            var tsf= bw * 0.02;
            return {
                '--button-width':       format.prop(bw,'px'),
                '--button-height':      format.prop(bh,'px'),
                '--toggle-diameter':    format.prop(td,'px'),
                '--toggle-wider':       format.prop(tw,'px'),
                '--toggle-shadow-offset': format.prop(tsf,'px'),
            }
        },
        buttonColorStyle(){
            return {
                '--color-active': this.colorActive,
                '--color-inactive': this.colorInactive,
                '--color-toggle': this.colorToggle,
            }
        },
        style(){
            var size = this.buttonSizeStyle
            var color = this.buttonColorStyle
            return { 
                ...size, 
                ...color,
                ...this.durationStl,
            }
        },
    },
    methods:{
        handle(event){
            this.$emit('handleSwitch', event.target.checked)
        }
    }
}
</script>

<style scoped lang="scss">

.toggler-root{
    -webkit-user-drag: none;
    pointer-events: auto;
    position: relative;

    $colorActive: var(--color-active);          --color-active: #30D158;
    $colorInactive: var(--color-inactive);      --color-inactive: #E9E9E9;
    $colorToggle: var(--color-toggle);          --color-toggle: #ffffff;
    $duration: var(--duration);                         --duration: 300ms;
    $buttonWidth: var(--button-width);                  --button-width: 100px;
    $buttonHeight: var(--button-height);                --button-height: 59px;
    $toggleDiameter: var(--toggle-diameter);            --toggle-diameter: 51px;
    $toggleWider: var(--toggle-wider);                  --toggle-wider: 67px;
    $toggleShadowOffset: var(--toggle-shadow-offset);   --toggle-shadow-offset: 2px;


    $buttonRadius:                  calc(#{$buttonHeight} / 2 );
    $buttonToggleOffset:            calc((#{$buttonHeight} - #{$toggleDiameter}) / 2);
    $toggleRadius:                  calc(#{$toggleDiameter} / 2);
    $toggleShadowBlur:              calc(#{$toggleShadowOffset} * 4);
    $toggleShadowOffsetChecked:     calc(#{$toggleShadowOffset} * -1);

    $toggleTranslate:               calc(#{$buttonWidth} - var(--toggle-diameter) - var(--button-height) + var(--toggle-diameter) );
    $toggleTranslateActive:         calc(var(--button-width) - var(--toggle-wider)    - var(--button-height) + var(--toggle-diameter) );

    width: $buttonWidth;
    height: $buttonHeight;
    overflow: hidden;
    background-color: transparent;
    & > .toggler-label{
        -webkit-tap-highlight-color:transparent;
        & > .toggler-input{
            display: none;
            + .toggler-button{
                display: inline-block;
                width: $buttonWidth;
                height: $buttonHeight;
                border-radius: $buttonRadius;
                background-color: $colorInactive;
                transition: $duration all ease-in-out;
                position: relative;
            }
            &:checked + .toggler-button{
                background-color: $colorActive;
            }
            + .toggler-button::after{

                content: '';
                width: $toggleDiameter;
                height: $toggleDiameter;
                background-color: $colorToggle;
                border-radius: $toggleRadius;
                position: absolute;
                top: $buttonToggleOffset;
                left: 0;
                margin: 0 $buttonToggleOffset;
                transform: scale(0.9, 0.9);
                box-shadow: $toggleShadowOffset 0 $toggleShadowBlur rgba(0, 0, 0, 0.1);
                transition: $duration all ease-in-out;
            }
            &:hover + .toggler-button::after{
                transform: scale(1, 1);
            }
            &:active + .toggler-button::after{
                transform: scale(1, 1);
                width: $toggleWider;
            }
            &:checked{
                + .toggler-button::after{
                    box-shadow: $toggleShadowOffsetChecked 0 $toggleShadowBlur rgba(0, 0, 0, 0.1);
                    transform: translateX($toggleTranslate) scale(0.9, 0.9);
                }
                &:hover + .toggler-button::after{
                    transform: translateX($toggleTranslate) scale(1, 1) ;
                }
                &:active + .toggler-button::after{
                    transform: translateX($toggleTranslateActive) scale(1, 1);
                }
            }
        }
    }
}

</style>
