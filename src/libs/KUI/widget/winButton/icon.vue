<template>
    <div class="win-button-icon" :style='typeStl'>
        <i :class="iconClass"></i>
    </div>
</template>

<script>
import {enumm} from './../../mix'
export default {
    mixins: [enumm('type', 'close')],
    computed:{
        iconClass(){
            switch(this.type){
                case 'close': return   'fas fa-times fa-2x fa-fw'
                case 'max': return     'far fa-window-maximize fa-2x fa-fw'
                case 'min': return     'fas fa-minus fa-2x fa-fw'
                case 'setting': return 'fas fa-cog fa-2x fa-fw'
            }
        },
        typeMix(){
            return this.type=='max'?'0.45rem':'0.5rem'
        }
    }
}
</script>

<style scoped>
.win-button-icon{
    pointer-events: none;
    font-size: var(--type);
    opacity: 0.6;
}
</style>