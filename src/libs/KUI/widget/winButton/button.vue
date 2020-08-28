<script>
import Card from './../../base/Card'
export default {
    extends: Card,
    props: {
        clickable: {type: Boolean, default: true},
        hoverable: {type: Boolean, default: true},

        round: { type: Boolean, default: false },
        flat:  { type: Boolean, default: true },
    },
    computed:{
        bgColorMix(){ return 'transparent' },
        bgColorPressMix(){ return this.bgColorHover },
        heightMix(){return 32},
        widthMix(){return 44},
        paddingMix(){return 8},
    }
}
</script>