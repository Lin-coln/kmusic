<script>
import KUI from '@/libs/KUI'
import { mapGetters, mapMutations } from 'vuex'
export default {
    extends: KUI.components.ScrollLayout,
    props:{
        topOffset:              { type: String, default: '0px' },
        enableTopOffset:        { type: Boolean, default: false },
        enableBottomOffset:     { type: Boolean, default: false },
        showThumb:      { type: Boolean, default: false },

        thumbSize:      { type: Number, default: 4 },
        thumbRadius:    { type: Boolean, default: true },

        bgColor: {type:String, default: "hsl(0,0%,98%)"},
    },
    data(){
        return {
            appbarHeight: [`${68+80+56}px`, `${68}px`],
            bottombarHeight: [`${68}px`, `${68}px`, `${0}px`],
        }
    },
    computed:{
        paddingMix(){
            var topOfs    = this.appbarHeight[this.getAppbarStatusIndex],
                bottomOfs = this.bottombarHeight[this.getBottombarStatusIndex]
            var paddingTop    = this.enableTopOffset
                                ? `calc(${topOfs} + ${this.topOffset})`
                                : 0,
                paddingBottom = this.enableBottomOffset?bottomOfs:0
            return [paddingTop, 0, paddingBottom, this.showThumb?4:0]
        },
        durationMix(){ return 300 },

        ...mapGetters(['getAppbarStatusIndex', 'getBottombarStatusIndex']),

    },
    methods: {
        ...mapMutations(['setAppbarStatusByIndex']),

        scroll(event){
            var scrollTop = this.$refs.layout.scrollTop
            var targetIndex = scrollTop==0?0:1
            // console.log(targetIndex,' << ', this.getAppbarStatusIndex,' :',scrollTop)
            if(targetIndex != this.getAppbarStatusIndex){
                this.setAppbarStatusByIndex(targetIndex)
            }
            this.$emit('handleScroll', event, this.$refs.layout)
        },
    },
    
}
</script>