<script>
import empty from './../empty'
export default {
    extends: empty,
    computed:{
        text(){
            return 'Local'
        },
        icon(){
            return 'hdd'
        },
    }
}
</script>