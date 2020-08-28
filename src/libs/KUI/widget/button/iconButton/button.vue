
<script>
import Card from './../../../base/Card'
export default {
    extends: Card,
    props:{
        clickable: {type: Boolean, default: true},
        hoverable: {type: Boolean, default: true},
        flat: {type: Boolean, default: true},
    },
}
</script>