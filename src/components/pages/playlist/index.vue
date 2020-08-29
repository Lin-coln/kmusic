
<template>
    <layout     
            bgColor='hsl(0,0%,98%)'
            >
        <KImage asset alignWidth width='100%' height='auto'
            src="zeenchin-0.jpg">
        </KImage>
    </layout>
</template>

<script>
import layout from './../scrollcontainer'
import { mapMutations } from 'vuex'
export default {
    components: { layout },
    computed:{
        style(){
            return {

            }
        }
    },
    methods:{
        ...mapMutations([
            'setAppbarTitleThemeByIndex',
            'setAppbarTitle'
        ]),
    },
    mounted(){
        this.setAppbarTitleThemeByIndex(1),
        this.setAppbarTitle('ZeenChin')
    }
}
</script>