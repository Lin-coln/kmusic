<template>
    <FlexLayout :length='$store.state.drawerbarWidth' status>
        <OverlapLayout :zIndex='2'>
            <div class="pagecontainer-root">
                <div class="pagecontainer-container">
                    <trans/>
                </div>
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
    width: 100%;
    height: 100%;
    padding: 0 0 68px 0;
    box-sizing: border-box;
    transition: all 300ms ease-in-out;
    & > .pagecontainer-container{
        width: 100%;
        height: 100%;
        position: relative;
    }
}


</style>