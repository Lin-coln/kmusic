<template>
    <div class="drawerbar-item" 
        :style='style' 
        @click="$emit('click')">
        <div style="font-size:120%">
            <i :class="icon"></i>
        </div>
        <div style="width:12px;"></div>
        {{text}}
    </div>
</template>

<script>
export default {
    props:{
        isFocus: {type: Boolean, default: false},
        icon: String,
        text: String,
    },
    computed:{
        style(){
            return {
                'color':    this.isFocus
                            ? 'rgba(0,0,0,0.9)'
                            : 'rgba(0,0,0,0.5)'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.drawerbar-item{
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 24px;
    box-sizing: border-box;
    font-size: 1.6em;
    transition: all 300ms ease-in-out;
    font-weight: bold;
    &:hover{
        background-color: rgba(0, 0, 0, 0.05);
    }
}
</style>