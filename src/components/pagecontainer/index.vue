<template>
    <FlexLayout :length='$store.state.drawerbarWidth' status>
        <OverlapLayout :zIndex='2'>
            <div class="pagecontainer-root">
                <trans/>
            </div>
        </OverlapLayout>
    </FlexLayout>
</template>

<script>
import trans from './trans'
export default {
    name: 'pagecontainer',
    components: { trans }
}
</script>

<style lang="scss" scoped>
.pagecontainer-root{
    pointer-events: auto;
    width: 100%;
    height: 100%;
    position: relative;
}



</style>