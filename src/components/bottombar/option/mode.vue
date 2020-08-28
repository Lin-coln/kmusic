<script>
import icon from './icon'

import { mapState, mapGetters, mapMutations } from 'vuex'

const typeArray = [
    'fas fa-redo-alt fa-2x fa-fw',
    'fas fa-sync-alt fa-2x fa-fw',
    'fas fa-random fa-2x fa-fw',
]
export default {
    extends: icon,
    computed:{
        typeMix(){ return typeArray[this.getPlayModeIndex] },
        
        ...mapState(['playMode']),
        ...mapGetters(['getPlayModeIndex'])
    },
    methods:{
        handleClick(event){
            this.changePlayMode()
        },
        ...mapMutations(['changePlayMode'])
    }
}
</script>