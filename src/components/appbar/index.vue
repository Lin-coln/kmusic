<template>
    <OverlapLayout :zIndex='3'>
        <div class="appbar-root" :style="style">
            <FlexLayout :length='$store.state.drawerbarWidth' status>
                <div class="appbar-container" :style='containerStyle'>
                    <navbtn 
                        :ctnHeight='normalHeight'
                        :ctnPadding='padding' />
                    <mtitle 
                        :normalHeight='normalHeight'
                        :titleHeight='titleHeight'
                        :ctnPadding='padding'
                        :navbtnWidth='navbtnWidth'
                        :searchbarWidth='searchbarWidth'
                        :minTitleWidth='minTitleWidth'/>
                    <searchbar
                        :normalHeight='normalHeight'
                        :titleHeight='titleHeight'
                        :searchbarHeight='searchbarHeight'
                        :ctnPadding='padding'
                        :searchbarWidth='searchbarWidth'
                        />
                </div>
            </FlexLayout>
        </div>
    </OverlapLayout>
</template>

<script>
import { mapGetters } from 'vuex'
import mtitle from './title'
import navbtn from './navbtn'
import searchbar from './searchbar'
export default {
    components: { mtitle, navbtn, searchbar },
    data(){
        return {
            navbtnWidth: '120px',
            minTitleWidth: '180px',
            searchbarWidth: '300px',

            normalHeight:   '68px',
            titleHeight:    '80px',
            searchbarHeight: '56px',

            shadowSize:  '10px',
            shadowColor: 'rgba(0,0,0,0.4)',
            color:       'hsl(0,0%,100%)',
            padding:     '8px',
        }
    },
    computed:{
        height(){
            return [
                `calc(${this.normalHeight} + ${this.titleHeight} + ${this.searchbarHeight})`, 
                this.normalHeight
            ]
        },

        ...mapGetters(['getAppbarStatusIndex']),
        style(){
            var index = this.getAppbarStatusIndex
            return {
                minWidth: '1204px',
                height: this.height[1],
                boxShadow: `0 0 ${
                    ['0px', this.shadowSize][index]} ${this.shadowColor}`       
            }
        },
        containerStyle(){
            var index = this.getAppbarStatusIndex
            return {
                minWidth: '964px',
                height:          [this.height[0], '100%'][index],
                backgroundColor: ['transparent', this.color][index],
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.appbar-root{
    width: 100%;
    transition: all 300ms ease-in-out;
    transition-delay: 300ms;
}
.appbar-container{
    width: 100%;
    transition: all 300ms ease-in-out;
    position: relative;
}
</style>