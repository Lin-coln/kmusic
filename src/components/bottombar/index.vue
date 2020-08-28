<template>
    <div>
        <layout :zIndex='4'>
            <bg 
                :src='currentMusic.img'
                :statusIndex='statusIndex'/>
        </layout>
        <layout :zIndex='6'>
            <card :statusIndex='statusIndex'>
                <div class="bottombar-player" :style='playerStyle'>
                    <player  :statusIndex='statusIndex'/>
                </div>
                <div class="bottombar-control" :style='controlStyle'>
                    <control :statusIndex='statusIndex'/>
                </div>
                <div class="bottombar-option" :style='optionStyle'>
                    <koption :statusIndex='statusIndex'/>
                </div>
                <div class="bottombar-button" :style='btnStyle' @click="changeBottombarStatus">
                    <i :class="buttonIcon"></i>
                </div>
            </card>
        </layout>
    </div>
</template>



<script>
import player from './player'
import control from './control'
import koption from './option'
import bg from './bg'
import card from './card'
import layout from './layout'

import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Bottombar',
    components: { bg, layout, card, player, control, koption},

    computed:{
        ...mapState(['currentMusic']),
        ...mapGetters(['getBottombarStatusIndex']),
 
        statusIndex(){
            return this.getBottombarStatusIndex
        },

        btnStyle(){
            return {
                'left': ['16px', '32px'][this.statusIndex],
                'top':   ['4px', '32px'][this.statusIndex],
                'background-color': ['rgba(0,0,0,0.7)','transparent'][this.statusIndex],
                '--opacity': ['0', '1'][this.statusIndex],
                '--opacity-hover': ['1', '1'][this.statusIndex],
            }
        },
        buttonIcon(){
            return `fas fa-${
                    ['expand','chevron-down'][this.statusIndex]
                } fa-2x fa-fw`
        },
        playerStyle(){
            return {
                'width': ['300px', '50vw'][this.statusIndex],
                'height': ['100%', 'calc(56vh + 4vh)'][this.statusIndex],
                'left':  ['16px', '32px'][this.statusIndex],
                'top':   ['4px', '48px'][this.statusIndex],
            }
        },
        controlStyle(){
            return {
                'width':  ['300px', '50vw'][this.statusIndex],
                'height': ['100%', 'calc(38vh - 32px - 48px)'][this.statusIndex],
                'left':   ['calc(50vw - 150px)', '32px'][this.statusIndex],
                'bottom': ['4px', 'calc(32px + 2vh)'][this.statusIndex],
            }
        },
        optionStyle(){
            return {
                'width':  ['300px', '50vw'][this.statusIndex],
                'height': ['100%', 'calc(38vh - 32px - 48px)'][this.statusIndex],
                'right':  ['16px', 'calc(50vw - 32px)'][this.statusIndex],
                'bottom': ['0px', 'calc(32px + 2vh)'][this.statusIndex],
            }
        },
    },
    methods:{
        ...mapMutations(['changeBottombarStatus']),
    }
}
</script>
<style lang="scss" scoped>
.bottombar-player{
    position: absolute;
    // background-color: rgba(256,0,0,0.3);
    transition: all 500ms ease-in-out;
}
.bottombar-control{
    position: absolute;
    // background-color: rgba(172, 255, 47, 0.445);
    transition: all 500ms ease-in-out;
}
.bottombar-option{
    position: absolute;
    // background-color: rgba(0,6,256,0.3);
    transition: all 500ms ease-in-out;
}
.bottombar-button{
    pointer-events: auto;
    position: absolute;
    transition: all 300ms ease-in-out;
    width: 60px;
    height: 60px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: var(--opacity);
    &:hover{
        opacity: var(--opacity-hover);
    }
    font-size: 1.4em;
}
</style>
