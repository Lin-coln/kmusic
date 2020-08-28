<script>
import NormalButton from './normalButton'
import {mix} from './../../mix'
export default {
    name: 'PrimaryButton',
    extends: NormalButton,
    computed:{
        bgColorMix(){ return 'hsl(135, 64%, 50%)' },
        bgColorHoverMix(){ return 'hsl(135, 74%, 55%)' },
        bgColorPressMix(){ return 'hsl(135, 64%, 45%)' },
        textColorMix(){ return 'rgba(255,255,255, 0.95)' },
    }
}
</script>
