<template>
    <div class="appbar-navbtn" :style="style">
        
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
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.appbar-navbtn{
    transition: all 300ms ease-in-out;

    background-color: rgba(0, 255, 0, 0.05);

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 4px;
    left: 16px;
    height: 60px;
    width: 120px;
}

</style>