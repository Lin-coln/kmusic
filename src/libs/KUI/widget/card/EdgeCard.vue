<script>

import { edgeRadius, edgePadding, edgeBorder } from './../../mix2'

import Card from './../../base/Card'

export default {
    name: 'EdgeCard',
    extends: Card,
    mixins: [ edgeRadius, edgePadding, edgeBorder ],
}
</script>