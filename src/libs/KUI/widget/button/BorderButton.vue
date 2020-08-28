<script>
import NormalButton from './normalButton'
import {mix} from './../../mix'
export default {
    name: 'TransparentButton',
    extends: NormalButton,
    mixins: [
        mix.color('bgColor', 'transparent'),
        mix.color('bgColorHover', 'hsla(135, 64%, 50%, 10%)'),
        mix.color('bgColorPress', 'hsla(135, 64%, 50%, 50%)'),
        mix.color('textColor', 'hsl(135, 64%, 50%)'),
        mix.color('borderColor', 'hsl(135, 64%, 50%)')
    ],
}
</script>

