<template>
    <div class="appbar-searchbar" :style="style">
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:{
        normalHeight: String,
        titleHeight: String,
        searchbarHeight: String,
        ctnPadding: String,
        searchbarWidth: String,
    },
    data(){
        return {
            height: ['40px', '36px'],
            padding: '32px',
            radius: '16px',
            backgroundColor: ['hsla(0,0%,80%,0.5)','hsl(0,0%,88%)'],
        }
    },
    computed:{
        ...mapGetters(['getAppbarStatusIndex']),
        style(){
            var index = this.getAppbarStatusIndex;
            return {
                backgroundColor: this.backgroundColor[index],
                borderRadius: this.radius,
                left: [this.padding, `calc((100% - ${this.searchbarWidth}) / 2 + ${this.ctnPadding})`][index],
                top: [
                    `calc(${this.normalHeight} + ${this.titleHeight} + (${this.searchbarHeight} - ${this.height[index]}) / 2)`, 
                    `calc((${this.normalHeight} - ${this.height[index]}) / 2)`
                ][index],
                height: this.height[index],
                width: [`calc(100vw - ${this.$store.state.drawerbarWidth}px - 2 * ${this.padding})`, this.searchbarWidth][index],
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.appbar-searchbar{
    transition: all 300ms ease-in-out;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;

    backdrop-filter: blur(10px) brightness(2);
}

</style>