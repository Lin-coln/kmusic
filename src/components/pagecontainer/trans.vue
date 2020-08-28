<template>
    <transition 
        :name="`transition-${transitionName}`"
        enter-active-class="page-transition-active"
        leave-active-class="page-transition-active"
        leave-class     ="page-transition-end"
        enter-to-class  ="page-transition-end">
        <router-view>
        </router-view>
    </transition>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    
    
    data(){
        return {
            transitionName: 'show',
        }
    },
    computed:{
        ...mapGetters(['getIndexByPage'])
    },
    watch: {
        '$store.state.currentPage'(newVal, oldVal) {
            var n = this.getIndexByPage(newVal)
            var a = this.getIndexByPage(oldVal)
            this.transitionName = n>a ? 'up' :
                                  n<a ? 'down' : 'show'
        },
    }
}
</script>

<style lang="scss" scoped>

.page-transition-active{
    transition: all 800ms ease-in-out;
    position: absolute;
    left: 0;
    top: 0;
}
.page-transition-end{
    opacity: 1;
}
.transition-show-enter,
.transition-show-leave-to{
    opacity: 0;
}
.transition-up-enter, .transition-down-leave-to{
    transform: translateY(140%) scaleY(1.8);
    opacity: 0;
}
.transition-up-leave-to, .transition-down-enter{
    transform: translateY(-140%) scaleY(1.8);
    opacity: 0;
}

</style>