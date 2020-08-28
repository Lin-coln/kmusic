<template>
    <div class="drawerbar-list" :style='style'>
        <item icon='fas fa-compass fa-1x fa-fw' text='Explore' 
                @click="handleClick(0)"
                :isFocus="focusIndex==0"/>
        <item icon='fas fa-cloud fa-1x fa-fw'   text='Cloud'   
                @click="handleClick(1)"
                :isFocus="focusIndex==1"/>
        <item icon='fas fa-hdd fa-1x fa-fw'     text='Local'   
                @click="handleClick(2)"
                :isFocus="focusIndex==2"/>
        <item icon='fas fa-list fa-1x fa-fw'    text='Playlist' 
                @click="handleClick(3)"
                :isFocus="focusIndex==3"/>
        <item icon='fas fa-heart fa-1x fa-fw'   text='Favorite' 
                @click="handleClick(4)"
                :isFocus="focusIndex==4"/>
        <div class="drawerbar-highlight" :style='highlightStyle'></div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import item from './item'
export default {
    components: { item },
    data(){
        return {
            padding: 8,
            itemSize: 56,
        }
    },
    computed:{
        ...mapGetters(['getCurrentPageIndex']),
        focusIndex(){
            return this.getCurrentPageIndex
        },
        style(){
            return {
                'padding': `${this.padding}px 0`,
            }
        },
        highlightStyle(){
            return {
                'top': `${this.focusIndex*this.itemSize+this.padding}px`,
                'height': `${this.itemSize}px`,
            }
        }
    },
    methods:{
        ...mapMutations(['setCurrentPageByIndex']),
        handleClick(index){
            this.setCurrentPageByIndex(index)
        }
    }
}
</script>

<style lang="scss" scoped>
.drawerbar-list{
    position: relative;
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    transition: all 300ms ease-in-out;
    &>.drawerbar-highlight{
        pointer-events: none;
        width: 2.5px;
        position: absolute;
        right: 0;
        background-color: black;
        transition: all 300ms ease-in-out;
    }
}
</style>