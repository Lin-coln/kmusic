<script>
import KText from './../../../base/Text'
import {mix} from './../../../mix'
export default {
    mixins: [ mix.boolean('light', false) ],
    extends: KText,
    computed:{
        heightMix(){
            return '100%'
        },
        weightMix(){
            return this.lightMix?500:900
        },
    }
}
</script>