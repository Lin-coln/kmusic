
import format from './../util/format'
export default {
    props:{
        side:          { type: String, default: 'top' },
        radiusOutside: { type: Number, default: 16 },
        radiusInside:  { type: Number, default: 0 },
    },
    computed:{
        radiusMix(){
            var v = this.getEdgeRadiusArray(
                this.radiusOutside, this.radiusInside, this.side)
            // return {
            //     '--radius': format.prop(v)
            // }
            return v
        },
    },
    methods:{
        getEdgeRadiusArray(outside, inside, side){
            var i = [
                'left', 'top', 'right', 'bottom','lt','rt','lb','rb'
                ].indexOf(side)
            var v = [
                [ inside,outside,outside,inside ],
                [ inside,inside,outside,outside ],
                [ outside,inside,inside,outside ],
                [ outside,outside,inside,inside ],
                [ inside, inside, outside, inside ],
                [ inside, inside, inside, outside ],
                [ inside, outside, inside, inside ],
                [ outside, inside, inside, inside ],
            ]
            return v[i]
        }
    }
}