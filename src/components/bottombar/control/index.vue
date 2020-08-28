<template>
    <div class="bottombar-control-root">
        <div class="bottombar-items" :style="backwardStyle">
            <backward :statusIndex='statusIndex'/>
        </div>
        <div class="bottombar-items" :style="playStyle">
            <play :statusIndex='statusIndex'/>
        </div>
        <div class="bottombar-items" :style="forwardStyle">
            <forward :statusIndex='statusIndex'/>
        </div>
    </div>
</template>

<script>
import play from './play'
import backward from './backward'
import forward from './forward'
export default {
    components:{play, backward, forward, },
    props: { 
        statusIndex: {Type:Number, default: 0},
    },
    computed:{
        backwardStyle(){
            return {
                'transform': `translateX(${['0', 
                this.getBackwardTransform][this.statusIndex]})`
            }
        },
        playStyle(){
            return {}
        },
        forwardStyle(){
            return {
                'transform': `translateX(${['0', 
                this.getForwardTransform][this.statusIndex]})`
            }
        },
        getBackwardTransform(){
            var iconSize = 60
            var controlIconSize = 80
            var delta = `(56vh - 4*${iconSize}px)/6`
            return `calc(${controlIconSize-iconSize}px + ${controlIconSize}px - ${iconSize}px - 2*${delta})`
        },
        getForwardTransform(){
            var iconSize = 60
            var controlIconSize = 80
            var delta = `(56vh - 4*${iconSize}px)/6`
            return `calc(-${controlIconSize-iconSize}px - ${controlIconSize}px + ${iconSize}px + 2*${delta})`
        },
    }
}
</script>
<style lang="scss" scoped>
.bottombar-control-root{
    position: relative;
    height: 100%;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    &>.bottombar-items{
        transition: all 500ms ease-in-out;
    }
}
</style>
