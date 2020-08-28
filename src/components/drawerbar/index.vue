<template>
    <DrawerCard 
        status 
        :width='240' 
        height='100%' 
        color='hsl(0,0%,95%)'
        :zIndex='1'>
      <profile/>
      <list/>
    </DrawerCard>
</template>

<script>
import profile from './profile'
import list from './list'
export default {
    name: 'Drawerbar',
    components:{
        profile,
        list,
    },

}
</script>