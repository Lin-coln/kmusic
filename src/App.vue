<template>
  <div id="app">
    <WinButton showSetting showMaximize />

    <!-- <overlap-layout :zIndex='20'>
      <toggler 
        @handleSwitch="handleSwitch"/>
    </overlap-layout> -->


    <appbar/>
    <!-- zindex 3; l: 100 -->

    <pagecontainer/>
    <!-- zindex 2;  l: 98 -->

    <drawerbar />
    <!-- zindex: 1;   l: 95 -->
    <!-- <bottombar /> -->
    <!-- zindex: 4 6; l: 100 -->

  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import bottombar from './components/bottombar'
import drawerbar from './components/drawerbar'
import pagecontainer from './components/pagecontainer'
import appbar from './components/appbar'
export default {
  name: 'App',
  components: { bottombar, drawerbar, pagecontainer, appbar },
  computed:{
    // ...mapGetters(['getBottombarStatus'])
  },
  methods: {
    
    ...mapMutations(['changeBottombarStatus']),

    handleSwitch(status){
      this.$store.commit('changeAppbarStatus')
    },
  },
}
</script>


<style lang="scss">
body{
  margin: 0;
  width: 100vw;
  height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 62.5%;
  background-color: hsl(0, 0%, 86%);
  // background-image: url(./assets/pic.jpg);
}
#app {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  backdrop-filter: blur(10px);
}
</style>