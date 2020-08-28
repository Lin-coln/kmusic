<template>
    <div class="appbar-title" :style="style">
        卧槽!!
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
                width: ['50vh', '200px'][index],
                height: ['80px','68px'][index],
                fontSize: ['4em','2.4em'][index],
                left: [`${32}px`, `${16+120+8}px`][index],
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.appbar-title{
    transition: all 300ms ease-in-out;

    background-color: rgba(255, 0, 0, 0.2);

    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    bottom: 0;

    font-weight: bold;
}

</style>