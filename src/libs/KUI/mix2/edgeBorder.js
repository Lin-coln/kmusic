
import format from '../util/format'
export default {
    props:{
        side:          { type: String, default: 'top' },
        borderSizeOutside: { type: Number, default: 0 },
        borderSizeInside:  { type: Number, default: 0 },
    },
    computed:{
        borderSizeMix(){
            var v = this.getEdgeBorderArray(
                this.borderSizeOutside, this.borderSizeInside, this.side)
            // return {
            //     '--borderSize': format.prop(v)
            // }
            return v
        },
    },
    methods:{
        getEdgeBorderArray(outside, inside, side){
            var i = [
                'left', 'top', 'right', 'bottom','lt','rt','lb','rb'
                ].indexOf(side)
            var v = [
                [ inside,outside,inside,inside ],
                [ inside,inside,outside,inside ],
                [ inside,inside,inside,outside ],
                [ outside,inside,inside,inside ],

                [ inside, outside, outside, inside ],
                [ inside, inside, outside, outside ],
                [ outside, outside, inside, inside ],
                [ outside, inside, inside, outside ],
            ]
            return v[i]
        }
    }
}