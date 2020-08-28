<template>
    <div class="bottombar-player-root">
        <div class="bottombar-img" :style='imgStyle'>
            <kimg 
                :src='currentMusic.img'
                :statusIndex='statusIndex'/>
        </div>
        <div class="bottombar-text" :style='textStyle'>
            <ktxt 
                :text='currentMusic.name' 
                :statusIndex='statusIndex'/>
        </div>
        <div class="bottombar-text" :style='subtextStyle'>
            <subTxt 
                :text='currentMusic.artist' 
                :statusIndex='statusIndex'/>
        </div>
    </div>
</template>

<script>
import kimg from './img'
import ktxt from './txt'
import subTxt from './subTxt'

import { mapState } from 'vuex'
export default {
    components: { kimg, ktxt, subTxt },
    props: { 
        statusIndex: {Type:Number, default: 0},
    },
    data(){
        return {
            paddingTop: '4vh' 
        }
    },
    computed:{
        ...mapState(['currentMusic']),

        imgStyle(){
            return {
                'transform': `translate(${ [
                    '0px, 0px', 
                    'calc((50vw - 56vh)/2), '+this.paddingTop
                ][this.statusIndex] })`,
            }
        },
        textStyle(){
            return {
                'transform': `translate(${ [
                    '68px, 0px', 
                    '50vw, '+this.paddingTop
                ][this.statusIndex] })`,
            }
        },
        subtextStyle(){
            return{
                'transform': `translate(${ [
                    '68px, 30px', 
                    '50vw, calc('+this.paddingTop+' + 4.2rem)'
                ][this.statusIndex] })`,
            }
        },
    }
}
</script>
<style lang="scss" scoped>
.bottombar-player-root{
    position: relative;
    height: 100%;
    width: 100%;
    &>.bottombar-img{
        position: absolute;
        transition: all 500ms ease-in-out;
    }
    &>.bottombar-text{
        position: absolute;
        transition: all 500ms ease-in-out;
    }
    
}


</style>
