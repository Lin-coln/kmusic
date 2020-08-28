<template>

    
    <OverlapLayout :zIndex='3'>
        <div class="appbar-root" :style="style">
            <FlexLayout :length='$store.state.drawerbarWidth' status>
                <div class="appbar-container" :style='containerStyle'>
                    <navbtn />
                    <mtitle />
                    <searchbar/>
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
            miniHeight: 68,
            normalHeight: 148,
        }
    },
    computed:{
        ...mapGetters(['getAppbarStatusIndex']),

        style(){
            var index = this.getAppbarStatusIndex
            return {
                height: this.miniHeight+'px',
                boxShadow: `0 0 ${
                    ['0px', '10px'][index]
                } rgba(0,0,0,0.4)`       
            }
        },
        containerStyle(){
            var index = this.getAppbarStatusIndex
            return {
                height: [this.normalHeight+'px', '100%'][index],
                backgroundColor: ['transparent', 'hsl(0,0%,100%)'][index],
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.appbar-root{
    width: 100%;
    transition: all 300ms ease-in-out;
}
.appbar-container{
    width: 100%;
    transition: all 300ms ease-in-out;
    position: relative;
}

</style>