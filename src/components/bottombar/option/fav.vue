<script>
import icon from './icon'
import { mapState, mapMutations } from 'vuex'
export default {
    extends: icon,
    data(){
        return {
            lock: false,
            scale: 1,
        }
    },
    computed:{
        ...mapState(['currentMusic']),
        isFav(){
            return this.currentMusic.isFav
        },

        typeMix(){
            return  this.isFav
                    ?'fas fa-heart fa-2x fa-fw'
                    :'far fa-heart fa-2x fa-fw'
        },
        colorMix(){
            return  this.isFav
                    ?'#c62828'
            :[
                this.isHover?'rgba(0,0,0,0.9)':'rgba(0,0,0,0.5)',
                this.isHover?'hsla(0,100%,100%,1)':'hsla(0,100%,100%,0.7)'
            ][this.statusIndex]
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
        ...mapMutations(['switchCurrentMusicFav']),

        handleClick(event){
            this.lock = true
            this.switchCurrentMusicFav()
            this.scale = 0
            setTimeout(()=>{              
                this.lock = false         
                this.scale = 1
            }, 10)
        },
    }
}
</script>