
<script>
import Card from './../../../base/Card'
export default {
    extends: Card,
    props:{
        clickable: {type: Boolean, default: true},
        hoverable: {type: Boolean, default: true},

        flat: {type: Boolean, default: true},
        stroke: {type: Boolean, default: false},
    },
    computed:{
        borderHoverSizeMix(){ return this.borderSizeMix },
        borderPressSizeMix(){ return this.borderSizeMix },
        borderHoverColorMix(){ return this.borderColorMix },
        borderPressColorMix(){ return this.borderColorMix },
    }
}
</script>