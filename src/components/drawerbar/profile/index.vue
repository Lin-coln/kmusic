<template>
    <div class="drawerbar-profile" :style="style">
        K-Music
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
  import format from '../../../libs/KUI/util/format'
export default {
    computed:{
        
        ...mapGetters(['getAppbarStatusIndex']),

        style(){
            var index = this.getAppbarStatusIndex
            return {
                backgroundColor: ['hsl(0, 0%, 95%)', 'hsl(0, 0%, 100%)'][index],
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.drawerbar-profile{
    width: 100%;
    height: 68px;

    font-size: 2.8em;
    line-height: 68px;
    text-align: center;
    font-weight: bold;

    transition: 300ms;
}
</style>