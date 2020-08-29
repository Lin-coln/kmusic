<template>
    <layout>
        <div class="empty-root" :style="style">
            <div style="font-size:140%;">
                <i :class="`fas fa-${icon} fa-1x fa-fw`"></i>
            </div>
            {{text}}
        </div>
    </layout>
</template>

<script>
import layout from './fixcontainer'
export default {
    components: { layout },
    computed:{
        text(){
            return '404 Not Found'
        },
        icon(){
            return 'ban'
        },
        color(){
            return 'hsl(0, 0%, 98%)'
        },
        style(){
            return {
                'background-color': this.color,
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.empty-root{
    width: 100%;
    height: 100%;
    // box-shadow: 0 0 10px rgba(0,0,0,0.2);

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    font-weight: bold;
    // background-image: url(./../../assets/2.jpg);
}
</style>