<script>
import KUI from '@/libs/KUI'
export default {
    extends: KUI.components.KImage,
    props:{
        statusIndex:{ type: Number, default: 0 },
    },
    computed:{
        assetMix(){ return true },

        bgColorMix(){
            return 'black'
        },
        widthMix(){ 
            return [60, '40vh'][this.statusIndex]
        },
        heightMix(){ 
            return [60, '40vh'][this.statusIndex]
        },
        alignHeightMix(){ 
            return '100%'
        },
        durationMix(){return 500},
        rotateMix(){
            return ['', 'Image-rotate'][this.statusIndex]
        },
        maskStyle(){
            return{
                'border-radius': ['10%', '100%'][this.statusIndex],
                'box-shadow': [
                    `0 0 8px rgba(0,0,0,0.6)`,
                    `0 0 32px rgba(0,0,0,0.6)`
                ][this.statusIndex],
                'border':  [
                    `0 solid rgba(0,0,0,0.9)`,
                    `8vh solid rgba(32,32,32,0.9)`
                ][this.statusIndex],
            }
        }
    }
}
</script>