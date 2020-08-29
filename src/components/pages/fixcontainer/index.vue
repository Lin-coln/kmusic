<template>
    <div :style="style">
        <slot></slot>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    computed:{
        style(){
            return {
                width: '100%',
                height: '100%',
                paddingTop: `${68}px`,
                'box-sizing': 'border-box'
            }
        }
    },
    methods:{
        ...mapMutations(['setAppbarStatusByIndex']),
    },
    mounted(){
        this.setAppbarStatusByIndex(1)
    }
}
</script>