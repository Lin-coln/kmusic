
<script>
import KUI from '@/libs/KUI'
export default {
    extends: KUI.components.Card,
    props:{
        round: { type: Boolean, default: false },
        statusIndex: {Type:Number, default: 0},
    },
    computed:{
        durationMix(){return 500},
        paddingMix(){ 
            return [[4, 16], [48, 32, 32, 32]][this.statusIndex]
        },
        heightMix(){
            return  [68, '100%'][this.statusIndex]
        },
        shadowSizeMix(){
            return  [8, 0][this.statusIndex]
        },
        shadowColorMix(){
            return ['rgba(0,0,0,0.1)', 'transparent'][this.statusIndex]
        },
        bgColorMix(){
            return ['white', 'transparent'][this.statusIndex]
        },
        pointerEventsMix(){
            return ['auto', 'none'][this.statusIndex]
        },
    },
}
</script>