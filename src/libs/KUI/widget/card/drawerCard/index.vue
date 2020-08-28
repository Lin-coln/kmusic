<template>
    <EdgeLayout :class="'drawer-card-root '+sideClass" :style='style'
        :side='sideMix'
        :zIndex='zIndexMix'
        :marginInside='marginInsideMix'
        :marginAside='marginAsideMix'
        fill>
        <card
            :side='sideMix'
            :shadowSize='shadowSizeCpt'
            :bgColor='colorMix'
            :radiusOutside='radiusOutsideMix'
            :radiusInside='radiusInsideMix'
            :height='heightMix'
            :width='widthMix'>
            <slot></slot>
        </card>
    </EdgeLayout>
</template>

<script>
import {mix} from './../../../mix'
import EdgeLayout from './../../../base/EdgeLayout'
import card from './card'
export default {
    name: 'DrawerCard',
    components: { EdgeLayout, card },
    mixins: [
        mix.duration(300),
        mix.number('zIndex', 1),
        mix.enumm('side', 'left'),
        mix.px('radiusInside', 0),
        mix.px('radiusOutside', 0),
        mix.px('marginInside', 0),
        mix.pxString('marginAside', 0),
        mix.color('color', 'white'),
        mix.boolean('shadow', false),
        mix.px('shadowSize', 30),

        mix.height('auto'),
        mix.width('auto'),
    ],
    props:{
        status:     { type: Boolean, default: false },
    },
    computed:{
        shadowSizeCpt(){
            return (this.status && this.shadowMix)?this.shadowSizeMix:0
        },
        style(){
            return{
                '--translate': (this.status)?'0px':'100%',
                '--translateOffset': (this.status)?'0px':(this.marginInsideMix+'px'),
                ...this.durationStl, 
            }
        },
        sideClass(){
            var a = ['left', 'top', 'right', 'bottom'].indexOf(this.sideMix)!=-1
            return (a)?('drawer-card-'+this.sideMix):''
        },
    },
    methods:{
        handleSwitch(event){
            this.$emit('handleSwitch', event)
        }
    }
}
</script>

<style lang="scss" scoped>
.drawer-card-root{
    $translate: var(--translate);
    $translateOffset: var(--translateOffset);
    $duration: var(--duration);
    transition: all $duration ease-in-out;
    &.drawer-card-left{
        transform: translateX(calc(-1 * #{$translate} - #{$translateOffset}));
    }
    &.drawer-card-right{
        transform: translateX(calc( 1 * #{$translate} + #{$translateOffset}));
    }
    &.drawer-card-top{
        transform: translateY(calc(-1 * #{$translate} - #{$translateOffset}));
    }
    &.drawer-card-bottom{
        transform: translateY(calc( 1 * #{$translate} + #{$translateOffset}));
    }
}
</style>