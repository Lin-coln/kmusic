<script>
import KUI from '@/libs/KUI'
export default {
    extends: KUI.components.KText,
    props:{
        statusIndex:{ type: Number, default: 0 },
    },
    computed:{
        colorMix(){
            return ['hsla(0,0,0,0.8)', 'white'][this.statusIndex]
        },
        lineClampMix(){ return 1 },
        alignVerticalMix(){ return 'start' },
        spaceMix(){
            return [0, 5][this.statusIndex]
        },
        weightMix(){ return [500, 500][this.statusIndex] },
        widthMix(){ 
            return [332, 'calc(50vw - 64px)'][this.statusIndex]
        },
        heightMix(){ 
            return [35, '4.5rem'][this.statusIndex]
        },
        sizeMix(){ 
            return [1.4, 4.5][this.statusIndex]
        },
        durationMix(){return 500},
    }
}
</script>