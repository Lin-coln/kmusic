<template>
    <OverlapLayout :zIndex='zIndex'>
        <div class="bottombar-layout">
            <slot></slot>
        </div>
    </OverlapLayout>
</template>
<script>
import KUI from '@/libs/KUI'
const {OverlapLayout} = KUI.components
export default {
    components: { OverlapLayout },
    props:{
        zIndex: Number,
    }
}
</script>

<style lang="scss" scoped>
.bottombar-layout{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
}
</style>