<template>
    <div class="appbar-searchbar" :style="style">
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            height: [40, 32],
            width: 400,
            paddingLeft: 32
        }
    },
    computed:{
        ...mapGetters(['getAppbarStatusIndex']),
        style(){
            var index = this.getAppbarStatusIndex;
            var appbarWidth = `(100vw - ${
                    this.$store.state.drawerbarWidth
                }px)`
            return {
                left: [
                    this.paddingLeft+'px', 
                    `calc((${appbarWidth} - ${this.width}px) / 2 + 8px)`
                ][index],
                top: [
                    148+((68-this.height[index])/2)+'px', 
                    (68-this.height[index])/2+'px'
                ][index],
                height: this.height[index]+'px',
                width: [
                    `calc(100% - 2 * ${this.paddingLeft}px)`, 
                    this.width+'px'
                ][index],
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.appbar-searchbar{
    transition: all 300ms ease-in-out;

    background-color: rgba(0,0,0,0.08);
    border-radius: 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
}

</style>