<script>
import KUI from '@/libs/KUI'
export default {
    extends: KUI.components.IconButton,
    props:{
        statusIndex:{ type: Number, default: 0 },
    },
    computed:{
        sizeFactoryMix(){ 
            return [60, 80][this.statusIndex]
        },
        colorMix(){
            // return [
            //     this.isHover?'rgba(0,0,0,0.9)':'rgba(0,0,0,0.5)',
            //     this.isHover?'hsla(0,100%,100%,1)':'hsla(0,100%,100%,0.7)'
            // ][this.statusIndex]
            return [
                'rgba(0,0,0,0.7)',
                'hsla(0,100%,100%,0.7)'
            ][this.statusIndex]
        },
        bgColorPressMix(){ return 'transparent' },
        durationMix(){return 300},
    },
}
</script>