
import format from '../util/format'
export default {
    props:{
        side:          { type: String, default: 'top' },
        paddingOutside: { type: Number, default: 16 },
        paddingInside:  { type: Number, default: 0 },
    },
    computed:{
        paddingMix(){
            var v = this.getEdgePaddingArray(
                this.paddingOutside, this.paddingInside, this.side)
            // return {
            //     '--padding': format.prop(v)
            // }
            return v
        },
    },
    methods:{
        getEdgePaddingArray(outside, inside, side){
            var i = [
                'left', 'top', 'right', 'bottom','lt','rt','lb','rb'
                ].indexOf(side)
            var v = [
                [ outside,outside,outside,inside ],
                [ inside,outside,outside,outside ],
                [ outside,inside,outside,outside ],
                [ outside,outside,inside,outside ],

                [ inside, outside, outside, inside ],
                [ inside, inside, outside, outside ],
                [ outside, outside, inside, inside ],
                [ outside, inside, inside, outside ],
            ]
            return v[i]
        }
    }
}