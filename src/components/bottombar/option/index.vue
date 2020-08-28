<template>
    <div class="bottombar-option-root">
        <div class="bottombar-items" :style="listStyle">
            <list   
                @mouseenter="handleHover(0)" @mouseleave='mouseleave(0)' :isHover='isHovers[0]' :statusIndex='statusIndex'/>
        </div>
        <div class="bottombar-items" :style="modeStyle">
            <mode   
                @mouseenter="handleHover(1)" @mouseleave='mouseleave(1)' :isHover='isHovers[1]' :statusIndex='statusIndex'/>
        </div>
        <div class="bottombar-items" :style="volumeStyle">
            <volume   
                @mouseenter="handleHover(2)" @mouseleave='mouseleave(2)' :isHover='isHovers[2]' :statusIndex='statusIndex'/>
        </div>
        <div class="bottombar-items" :style="favStyle">
            <fav    
                @mouseenter="handleHover(3)" @mouseleave='mouseleave(3)' :isHover='isHovers[3]' :statusIndex='statusIndex'/>
        </div>    
    </div>
</template>

<script>
import fav from './fav'
import volume from './volume'
import mode from './mode'
import list from './list'
export default {
    components:{fav, volume, mode, list},
    props: { 
        statusIndex: {Type:Number, default: 0},
    },
    data(){
        return {
            isHovers: [false, false, false, false],
        }
    },
    computed:{
        favStyle(){
            return {
                'transform': `translate(${['0, 0', 
                this.getTransform(0,0)][this.statusIndex]})`
            }
        },
        volumeStyle(){
            return {
                'transform': `translate(${['0, 0', 
                this.getTransform(1, 3)][this.statusIndex]})`
            }
        },
        modeStyle(){
            return {
                'transform': `translate(${['0, 0', 
                this.getTransform(2, 4)][this.statusIndex]})`
            }
        },
        listStyle(){
            return {
                'transform': `translate(${['0, 0', 
                this.getTransform(3, 5)][this.statusIndex]})`
            }
        },
    },
    methods:{
        handleHover(index){
            var tmp = [false, false, false, false]
            tmp[index] = true
            this.isHovers = tmp
        },
        mouseleave(index){
            this.isHovers = [false, false, false, false]
        },
        getTransform(index, newIndex){
            var pogressHeight = 20
            var iconSize = 60
            var delta = `(56vh - 4*${iconSize}px)/6`
            var vx = [
                `(0px - 2*${iconSize}px - 3*${delta})`,
                `(0px - 1*${iconSize}px - 1*${delta})`,
                `${delta}`,
                `(1*${iconSize}px + 3*${delta})`,
            ]
            var getx = function(i){
                return `calc(${4-index}*${iconSize}px - 0.5*50vw + ${vx[i]})`
            }
            var vy = [
                `calc(-${pogressHeight}px - 0.5*${iconSize}px - 80px + 0.5*(38vh - 80px))`,
                `calc(-0.5*${iconSize}px - 10px + 0.5*(38vh - 80px))`,
            ]
            var v = [
                `${getx(0)},${vy[0]}`, 
                `${getx(1)},${vy[0]}`, 
                `${getx(2)},${vy[0]}`, 
                `${getx(3)},${vy[0]}`, 
                `${getx(0)},${vy[1]}`, 
                `${getx(3)},${vy[1]}`, 
            ]
            return v[newIndex]
        }
    }
}
</script>
<style lang="scss" scoped>
.bottombar-option-root{
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-items: center;
    &>.bottombar-items{
        transition: all 500ms ease-in-out;
    }
}
</style>
