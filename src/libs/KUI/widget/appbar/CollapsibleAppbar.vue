<template>
    <EdgeLayout
        side='top'
        :zIndex='zIndex'
        :marginInside='0'
        :marginAside='0'
        fill>
        <edge-card 
            side='top'
            width='100%'
            height='auto'
            :radiusInside="0"
            :radiusOutside="0"
            :shadowSize='shadowSizeCpt'
            :shadowHoverSize='shadowSizeCpt'
            :shadowColor='color'
            :shadowHoverColor='color'
            :bgColor='color'  
            :bgHoverColor='color'
            :paddingInside='0'
            :paddingOutside='0'
            :borderSize='borderSize'
            >
            <div :class="'collapsible-appbar-root '+sideClass" 
                 :style='style'
                 ref='root'>
                <EdgeLayout ref='cloneContainer'
                    side='top'
                    :zIndex='-1' 
                    :marginInside='0' 
                    :marginAside='0'>
                    <div class="collapsible-appbar-clone" ref='clone'>
                        <KText 
                            :text='title'
                            :weight='500' 
                            :size='1.4' 
                            :height='32'/>
                    </div>
                </EdgeLayout>
                <div class='collapsible-appbar-base' ref='base'>
                    <div class="collapsible-appbar-nav" ref='nav'>
                        <slot name="nav"></slot>
                    </div>
                    <div class="collapsible-appbar-title"
                        :style='titleTranslateStyle'>
                        <KText 
                            :text='title'
                            :weight='weight'
                            :size='fontSize'
                            :color='textColor'
                            />
                    </div>
                    <div class="collapsible-appbar-tool">
                        <slot name="tool"></slot>
                    </div>
                </div>
                <div class='collapsible-appbar-other'>
                    <slot name="other"></slot>
                </div>
            </div>
        </edge-card>
    </EdgeLayout>
</template>

<script>
import EdgeLayout from './../../base/EdgeLayout'
import KText from './../../base/Text'
import EdgeCard from './../card/EdgeCard'

export default {
    name:'CollapsibleAppbar',
    components: { EdgeLayout, KText, EdgeCard },
    props:{
        status: { type: Boolean, default: true},
        zIndex:     { type: Number, default: 1 },

        shadow:     { type: Boolean, default: true },
        shadowSize: { type: Number, default: 10 },
        color:      { type: String, default: 'white'},
        
        minHeight:  { type: Number, default: 32 },
        tabHeight:  { type: Number, default: 0 },

        duration:   { type: Number, default: 300 },

        title:  { type: String, default: 'Title'},
        textColor : { type:String, default: 'rgba(0,0,0,0.8)' }

        
    },
    data(){
        return {
            currentTitleTranslate: 0,
            timer: '',
        }
    },
    computed:{
        shadowSizeCpt(){
            return (this.status && this.shadow)?this.shadowSize:0
        },
        borderSize(){
            return this.status?0:[0,0,1,0]
        },
        weight(){
            return this.status?900:500
        },
        fontSize(){
            return this.status?2.8:1.4
        },
        durationCpt(){
            return this.duration+'ms'
        },
        style(){
            return{
                '--duration': this.durationCpt, 
                '--height':         this.status?'48px':'32px', 
                '--paddingTop':     this.status?'24px':'0px', 
                '--paddingBottom':  this.status?'8px':'0px', 
                '--toolScale':     this.status?1:0,
                '--otherHeight':     this.status?(this.tabHeight+'px'):'0px',
                '--opacity': this.status?1:0.2
            }
        },
        sideClass(){
            return 'collapsible-appbar-top'
        },
        titleTranslateStyle(){
            return this.status?{
                'transform': 'translateX('+0+'px)',
            }:{
                'transform': 'translateX('+this.currentTitleTranslate+'px)',
            }
        },

    },
    methods:{
        handleSwitch(event){
            this.$emit('handleSwitch', event)
        },
        getTitleTranslate(){
            var result = 0
            var parent = this.$refs.cloneContainer
            var nav = this.$refs.nav
            var clone = this.$refs.clone
            if(clone && parent && nav){
                parent = parent.$el
                var pS = getComputedStyle(parent)
                var cS = getComputedStyle(clone)
                var nS = getComputedStyle(nav)
                var parent_width = parseFloat(pS.width)
                var clone_width = parseFloat(cS.width)
                var nav_width = parseFloat(nS.width)
                result = (parent_width - clone_width)/2 -32 -nav_width;
            }//else console.log('Oops')
            return result
        },
        intervalFunction(){
            
        }
    },
    mounted(){
        const that = this
        this.timer = setInterval(function () {
            var data = that.getTitleTranslate()
	        if (that.currentTitleTranslate === data) return;
            that.currentTitleTranslate = data
        }, 10);
    },
    destroyed(){
        clearInterval(this.timer)
    }
}
</script>


<style lang="scss" scoped>

.collapsible-appbar-root{
    $duration: var(--duration);
    transition: all $duration ease-in-out;

    $height: var(--height);
    $paddingTop: var(--paddingTop);
    $paddingBottom: var(--paddingBottom);
    
    $toolScale: var(--toolScale);
    $otherHeight: var(--otherHeight);

    overflow: hidden;
    box-sizing: border-box;
    padding-top: $paddingTop;


    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .collapsible-appbar-clone{
        opacity: 0;
        pointer-events: none;
        display:flex; 
        justify-content:center; 
        align-items:center; 
        height: 32px;
    }

    .collapsible-appbar-base{   
        transition: all $duration ease-in-out;
        width: 100%;
        height: $height;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: $paddingBottom;
        // overflow: hidden;

        .collapsible-appbar-nav{
            transition: all $duration ease-in-out;
            // overflow: hidden;
            width: auto;
            height: calc(#{$height} * #{$toolScale});
            opacity: $toolScale;
            margin: 16px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        }
        .collapsible-appbar-title{
            transition: all $duration ease-in-out;
        }
        .collapsible-appbar-tool{
            transition: all $duration ease-in-out;
            overflow: hidden;
            width: 100%;
            height: calc(#{$height} * #{$toolScale});
            opacity: $toolScale;
            margin: 0 16px;
            flex: 1;
            display: flex;
            flex-direction: row-reverse;
            justify-content: flex-start;
            align-items: center;

        }
    }

    .collapsible-appbar-other{
        width: 100%;
        height: $otherHeight;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        transition: all $duration ease-in-out;
    }
}

</style>