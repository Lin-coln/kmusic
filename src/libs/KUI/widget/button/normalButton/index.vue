<template>
    <kbutton
        :width="widthMix"
        :height="heightCpt"
        :radius="radiusCpt"
        :padding="paddingCpt"
        :bgColor="bgColorMix"
        :bgColorHover="bgColorHoverMix"
        :bgColorPress="bgColorPressMix"
        :borderColor='borderColorMix'
        :borderSize ="(borderColorMix=='transparent')?0:sizeCpt"
        :stroke="(borderColorMix=='transparent')?false:true"
        @handleClick="handleClick">
        <ktext  
            :light='lightMix'
            :text="textMix"
            :color="textColorMix"
            :size="sizeCpt"/>
    </kbutton>
</template>

<script>
import kbutton from './button'
import ktext from './text'
import {mix} from './../../../mix'
export default {
    name: 'normalButton',
    components: { kbutton, ktext },
    mixins: [ 
        mix.width('auto'),
        mix.text('text','Button'),
        mix.color('bgColor', 'rgba(0,0,0,0.08)'),
        mix.color('bgColorHover', 'rgba(0,0,0,0.05)'),
        mix.color('bgColorPress', 'rgba(0,0,0,0.2)'),
        mix.color('textColor', 'rgba(0,0,0,0.8)'),

        mix.color('borderColor', 'transparent'),
        mix.boolean('light', false)
    ],
    props: {
        size: { type: String, default: 'normal' }, 
    },
    computed:{
        heightCpt(){
            var v = [48, 32, 90]
            var k = ['normal', 'small', 'large']
            return v[k.indexOf(this.size)]
        },
        radiusCpt(){
            var v = [12, 8, 16]
            var k = ['normal', 'small', 'large']
            return v[k.indexOf(this.size)]
        },
        paddingCpt(){
            var v = [
                [8, 16],
                [16/3, 32/3],
                [45/3, 90/3],
            ]
            var k = ['normal', 'small', 'large']
            return v[k.indexOf(this.size)]
        },
        sizeCpt(){
            var v = [2, 32/24, 90/24]
            var k = ['normal', 'small', 'large']
            return v[k.indexOf(this.size)]
        },
    },
    methods:{
        handleClick(event){
            this.$emit('handleClick', event)
        }
    }
}
</script>
