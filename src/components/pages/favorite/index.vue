<script>
import empty from './../empty'
export default {
    extends: empty,
    computed:{
        text(){
            return 'Favorite'
        },
        icon(){
            return 'heart'
        }
    }
}
</script>