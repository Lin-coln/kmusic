<template>
    <layout 
        :topOffset='topOffset'
        :enableTopOffset='enableTopOffset'
        :enableBottomOffset='enableBottomOffset'
        :showThumb='showThumb'
        :thumbRadius='thumbRadius'
        :bgColor='bgColor'>
        <div :style="style">
            <slot></slot>
        </div>
    </layout>
</template>

<script>
import layout from './layout'

import { mapMutations } from 'vuex'
export default {
    components: { layout },
    props:{
        topOffset:              { type: String, default: '0px' },
        enableTopOffset:        { type: Boolean, default: false },
        enableBottomOffset:     { type: Boolean, default: false },
        showThumb:      { type: Boolean, default: false },
        thumbRadius:    { type: Boolean, default: true },
        bgColor: {type:String, default: "hsl(0,0%,98%)"},
    },
    computed:{
        style(){
            return {
                minHeight: '100vh',
                width: '100%',
                height: 'auto',
            }
        }
    },
    methods:{
        ...mapMutations(['setAppbarStatusByIndex']),
    },
    mounted(){
        this.setAppbarStatusByIndex(0)
    }
}
</script>