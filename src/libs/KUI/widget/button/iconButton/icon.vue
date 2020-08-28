<template>
    <div class="button-icon" :style='iconStyle'>
        <i :class="typeMix"></i>
    </div>
</template>

<script>
import {text, em, color, duration} from './../../../mix'
export default {
    mixins: [
        text('type', 'fas fa-cog fa-2x fa-fw'), 
        em('size', 1),
        color('color', 'black'),
        duration(300),
    ],
    props: { filterStyle: {
        type: Object, default: {}
    } },
    computed:{
        iconStyle(){
            return {
                ...this.sizeStl,
                ...this.colorStl,
                ...this.durationStl,
                ...this.filterStyle,
            }
        },
    }
}
</script>

<style scoped>
.button-icon{
    color: var(--color);
    pointer-events: none;
    font-size: var(--size);
    transition: all var(--duration) ease-in-out;
}
</style>