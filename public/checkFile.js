
const fs = require('fs')
const path = require('path')


const checkFile = function(...array){
    array.forEach(item => {
        var ext = fs.existsSync(item.dir);
        if(!ext){
            item.create()
        }
    });
}

const defaultConfig = {
    "haha": 23
}

module.exports = function(){
    checkFile(
        {
            dir: global.path.config, 
            create(){ 
                global.method.jsonIO.set(global.path.config, defaultConfig)
            }
        }
    )
}