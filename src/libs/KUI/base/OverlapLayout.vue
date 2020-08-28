<template>
    <div    class="overlapLayout-root"
            :style="style">
        <div class="overlapLayout-container">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import format from './../util/format'
import { duration, number } from './../mix';
export default {
    mixins: [ 
        duration(), 
        number('zIndex', 1),
    ],
    name: 'OverlapLayout',
    computed:{
        style(){
            return {
                ...this.zIndexStl,
                ...this.durationStl,
            }
        }
    },
}
</script>

<style scoped lang='scss'>
.overlapLayout-root{
    $zIndex: var(--zIndex);
    $duration: var(--duration);

    z-index: $zIndex;
    transition: $duration all ease-in-out;

    // overflow: hidden;
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    &>.overlapLayout-container{
        position: relative;
        box-sizing: border-box;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
}
</style>


