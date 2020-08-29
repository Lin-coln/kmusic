<template>
    <div class="appbar-navbtn" :style="style">
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        ctnHeight: String,
        ctnPadding: String,
    },
    data(){
        return {
            size: '60px',
            count: 2,
        }
    },
    computed:{
        ...mapGetters(['getAppbarStatusIndex']),
        style(){
            var index = this.getAppbarStatusIndex
            return {
                top: `calc((${this.ctnHeight} - ${this.size})/2)`,
                left: `calc(2 * ${this.ctnPadding})`,
                width: `calc(${this.size} * ${this.count})`,
                height:  this.size,
            }
        },
    }
}
</script>

<style lang="scss" scoped>
.appbar-navbtn{
    transition: all 300ms ease-in-out;

    // background-color: rgba(0, 255, 0, 0.3);

    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}

</style>