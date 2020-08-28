<script>
import KUI from '@/libs/KUI'
export default {
    extends: KUI.components.KText,
    props:{
        statusIndex:{ type: Number, default: 0 },
    },
    computed:{
        colorMix(){
            return ['hsla(0,0,0,0.6)', 'hsla(0,0%,100%,0.8)']
            [this.statusIndex]
        },
        spaceMix(){
            return [0, 2][this.statusIndex]
        },
        heightMix(){ 
            return [25, '2rem'][this.statusIndex]
        },
        sizeMix(){ 
            return [1.2, 2][this.statusIndex]
        },
        durationMix(){return 500},
    }
}
</script>