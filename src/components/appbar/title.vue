<template>
    <div class="appbar-title" :style="style">
        {{$store.state.appbarTitle}}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props:{
        normalHeight: String,
        titleHeight: String,
        ctnPadding: String,
        navbtnWidth: String,
        searchbarWidth: String,
        minTitleWidth: String,
    },
    data(){
        return {
            titleColorTheme: ['black', 'white'],
            fontSize: ['4em','2.4em'],
            paddingLeft: '32px',
        }
    },
    computed:{
        height(){
            return [this.titleHeight, this.normalHeight]
        },

        ...mapGetters(['getAppbarStatusIndex', 'getAppbarTitleThemeIndex']),

        style(){
            var index = this.getAppbarStatusIndex
            
            return {
                minWidth: this.minTitleWidth,
                width: [
                    `calc(100% - 2 * ${this.paddingLeft})`, 
                    `calc((100% - ${this.searchbarWidth}) / 2 - ${this.navbtnWidth} - 4 * ${this.ctnPadding})`
                ][index],
                height:     this.height[index],
                lineHeight: this.height[index],
                fontSize:   this.fontSize[index],
                left: [
                    this.paddingLeft, 
                    `calc(3 * ${this.ctnPadding} + ${this.navbtnWidth})`
                ][index],
                top: [`${this.normalHeight}`, '0px'][index],
                color: [
                        this.titleColorTheme[this.getAppbarTitleThemeIndex]
                    , 'black'][index],
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.appbar-title{
    transition: all 300ms ease-in-out;

    // background-color: rgba(255, 0, 0, 0.2);
    position: absolute;
    font-weight: bold;

    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

</style>