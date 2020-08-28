<script>
import icon from './icon'
export default {
    extends: icon,
    data(){
        return {
            isPause: false,
            lock: false,
            scale: 1.8,
        }
    },
    computed:{
        typeMix(){
            return  this.isPause
                    ?'fas fa-pause-circle fa-2x fa-fw'
                    :'fas fa-play-circle fa-2x fa-fw'
        },
        durationMix(){
            return this.lock?0:300
        },
        filterStyle(){
            return {
                'transform': `scale(${this.scale})`,
            }
        },
    },
    methods:{
        handleClick(event){
            this.lock = true
            this.isPause = !this.isPause
            this.scale = 0 
            setTimeout(()=>{              
                this.lock = false         
                this.scale = 1.8
            }, 10)
        },
    }
}
</script>