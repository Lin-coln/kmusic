<template>
    <div class="appbar-searchbar" :style="style">
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters(['getAppbarStatusIndex']),
        style(){
            var index = this.getAppbarStatusIndex
            return {
                left: ['32px', '200px'][index],
                top: [148+((68-48)/2)+'px', (68-48)/2+'px'][index],
                height: '48px',
                width: ['calc(100% - 64px)', '200px'][index],
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.appbar-searchbar{
    transition: all 300ms ease-in-out;

    background-color: rgba(0,0,0,0.18);
    border-radius: 16px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
}

</style>