<script>
import icon from './icon'
export default {
    extends: icon,
    data(){
        return {
            lock: false,
            scale: 0.75,
        }
    },
    computed:{
        typeMix(){
            return  'fas fa-step-backward fa-2x fa-fw'
        },
        durationMix(){
            return this.lock?0:300
        },
        filterStyle(){
            return {
                'transform': `scale(${this.scale})`,
            }
        }
    },
    methods:{
        handleClick(event){
            this.lock = true
            this.scale = 0 
            setTimeout(()=>{              
                this.lock = false         
                this.scale = 0.75
            }, 10)
        },
    }
}
</script>