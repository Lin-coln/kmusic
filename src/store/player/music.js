class Music{
    constructor(name, artist, isFav, img){
        this.name = name;
        this.artist = artist;
        this.isFav = isFav;
        this.img = img;
    }
}
const currentMusic = new Music('七百年后', '陈奕迅', false, '1.jpg')

const setCurrentMusicFav = (isFav)=>{
    currentMusic.isFav = isFav
    return currentMusic
}

const config = {
    state:{
        currentMusic: currentMusic
    },
    getters:{

    },
    mutations:{
        switchCurrentMusicFav(state){
            var cur = state.currentMusic.isFav
            state.currentMusic = setCurrentMusicFav(!cur)
        }
    },
    actions:{

    },
    modules:{

    }
}
export default config