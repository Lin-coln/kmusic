<script>
import KUI from '@/libs/KUI'
export default {
    extends: KUI.components.KImage,
    props:{
        statusIndex:{ type: Number, default: 0 },
    },
    computed:{
        assetMix(){ return true },

        widthMix(){ return '100%' },
        heightMix(){ 
            return [68, '100%'][this.statusIndex]
        },
        alignWidthMix(){ return '100%' },
        durationMix(){return 500},

        filterStyle(){
            return {
                'filter' : `blur(40px) brightness(0.4)`,
                'transform': `scale(1.3)`,
            }
        }
    }
}
</script>