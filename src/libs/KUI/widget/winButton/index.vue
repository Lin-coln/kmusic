<template>
    <div class="win-button-container" :style='style'>
        <kbutton    v-if="showSetting"
            :bgColorHover="colorHover"
            @handleClick='handleSetting'>
            <icon type='setting'/>
        </kbutton>
        <kbutton    
            :bgColorHover="colorHover"
            @handleClick='handleMin'>
            <icon type='min'/>
        </kbutton>
        <kbutton    v-if="showMaximize"
            :bgColorHover="colorHover" 
            @handleClick='handleMax'>
            <icon type='max'/>
        </kbutton>
        <kbutton    
            :bgColorHover="colorWarn" 
            @handleClick='handleClose'>
            <icon type='close'/>
        </kbutton>
    </div>
</template>

<script>
import kbutton from './button'
import icon from './icon'
export default {
    name: 'WinButton',
    components: { icon, kbutton },
    props: {
        zIndex: { type: Number, default: 1000 },
        showSetting:  { type: Boolean, default: false },
        showMaximize: { type: Boolean, default: false },
        colorHover:     { type: String, default: 'hsla(0, 0%, 0%, 10%)' },
        colorWarn:      { type: String, default: 'hsl(349, 100%, 40%)' },
    },
    computed:{
        style(){
            return {
                '--zIndex': this.zIndex
            }
        }
    },
    methods:{
        handleSetting()   { 
            this.$emit('handleSetting') 
        },
        handleClose()     { 
            this.$store.commit('windowClose')  
        },
        handleMin()  { 
            this.$store.commit('windowMinimize')
        },
        handleMax()  { 
            this.$store.commit('windowMaximize')
        },
    }
}
</script>

<style lang="scss" scoped>
.win-button-container{
    --zIndex: 1000;
    $zIndex: var(--zIndex);
    z-index: $zIndex;
    position: fixed;
    right: 0;
    top: 0;
    padding: 0;
    margin: 0;
    width: auto;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>