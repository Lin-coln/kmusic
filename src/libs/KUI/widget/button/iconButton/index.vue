<template>
    <kbutton
        :width="heightCpt"
        :height="heightCpt"
        :radius="radiusCpt"
        :padding="paddingCpt"
        :bgColor="bgColorMix"
        :bgColorHover="bgColorHoverMix"
        :bgColorPress="bgColorPressMix"
        @handleClick="handleClick"
        @mouseenter="mouseenter"
        @mouseleave="mouseleave"
        >
        <icon 
            :filterStyle='filterStyle'
            :type='typeMix'
            :size='sizeCpt'
            :color='colorMix'
            :duration='durationMix'
        />
    </kbutton>
</template>

<script>
import kbutton from './button'
import icon from './icon'
import {mix} from './../../../mix'
export default {
    name: 'iconButton',
    components: { kbutton, icon },
    mixins: [ 
        mix.duration(300),
        mix.color('bgColor', 'transparent'),
        mix.color('bgColorHover', 'transparent'),
        mix.color('bgColorPress', 'rgba(0,0,0,0.08)'),
        mix.color('color', 'rgba(0,0,0,0.8)'),
        mix.text('type', 'fas fa-cog fa-2x fa-fw'),
        mix.number('sizeFactory', 0)
    ],
    props: {
        size: { type: String, default: 'normal' }, 
    },
    computed:{
        heightCpt(){
            if(this.sizeFactoryMix>0) 
                return this.sizeFactoryMix
            var v = [48, 32, 90]
            var k = ['normal', 'small', 'large']
            return v[k.indexOf(this.size)]
        },
        radiusCpt(){
            if(this.sizeFactoryMix>0) 
                return this.sizeFactoryMix/4
            var v = [12, 8, 16]
            var k = ['normal', 'small', 'large']
            return v[k.indexOf(this.size)]
        },
        paddingCpt(){
            if(this.sizeFactoryMix>0) 
                return [this.sizeFactoryMix/6, this.sizeFactoryMix/3]
            var v = [
                [8, 16],
                [16/3, 32/3],
                [45/3, 90/3],
            ]
            var k = ['normal', 'small', 'large']
            return v[k.indexOf(this.size)]
        },
        sizeCpt(){
            if(this.sizeFactoryMix>0) {
                return (this.sizeFactoryMix/24/1.8)
            }
            var v = [2, 32/24, 90/24]
            var k = ['normal', 'small', 'large']
            v = v[k.indexOf(this.size)]
            return v/1.8
        },
        
        filterStyle(){ return {} },
    },
    methods:{
        handleClick(event){
            this.$emit('handleClick', event)
        },
        mouseenter(event){
            this.$emit('mouseenter', event)
        },
        mouseleave(event){
            this.$emit('mouseleave', event)
        },
    }
}
</script>
