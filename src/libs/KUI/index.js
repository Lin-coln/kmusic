import ScrollLayout from './base/ScrollLayout'
import FlexLayout from './base/FlexLayout'
import EdgeLayout from './base/EdgeLayout'
import OverlapLayout from './base/OverlapLayout'

import KText from './base/Text'
import Card from './base/Card'
import Divider from './base/Divider'
import Toggler from './base/Toggler'
import KImage from './base/Image'

import EdgeCard from './widget/card/EdgeCard'
import DrawerCard from './widget/card/drawerCard'
import PrimaryButton from './widget/button/PrimaryButton'
import TransparentButton from './widget/button/TransparentButton'
import BorderButton from './widget/button/BorderButton'
import WinButton from './widget/winButton'
import NormalButton from './widget/button/normalButton'
import IconButton from './widget/button/iconButton'

// import CollapsibleAppbar from './widget/appbar/CollapsibleAppbar'

export default{
    components:{
        ...{
            ScrollLayout,
            FlexLayout,
            EdgeLayout,
            OverlapLayout,
            
            KText,
            Card,
            Divider,
            Toggler,
            KImage,
        },
        ...{
            EdgeCard,
            DrawerCard,
            WinButton,
            NormalButton,
            TransparentButton,
            BorderButton,
            PrimaryButton,
            IconButton,
            // CollapsibleAppbar,
        },
        
        
    }
}