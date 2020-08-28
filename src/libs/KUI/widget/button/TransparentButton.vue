<script>
import NormalButton from './normalButton'
import {mix} from './../../mix'
export default {
    name: 'TransparentButton',
    extends: NormalButton,
    mixins: [
        mix.color('bgColor', 'transparent'),
        mix.color('bgColorHover', 'transparent'),
        mix.color('bgColorPress', 'hsla(0, 0%, 0%, 8%)'),
        mix.color('textColor', 'hsla(0, 0%, 0%, 80%)'),
    ],
}
</script>
