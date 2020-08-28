const path = require('path')
const { app } = require('electron')

function initInfo(){
    global.isDev = !app.isPackaged
    global.env = {
        mode: app.isPackaged?'pdc':'dev'
    }
}
function initPath(){
    const public = function(...dirs){
        return path.join(app.getAppPath(), 'build', ...dirs)
    }
    global.path = {
        public,
        lib(...dirs){ return public('lib', ...dirs) },
        util(...dirs){ return public('util', ...dirs) },
        res(...dirs){ return public('res', ...dirs) },

        config: public('config.json'),
        index: public('index.html')
    }
}
function initMethod(){
    const jsonIO = require(global.path.util('jsonIO'))
    global.method = {
        jsonIO,
        config: {
            get(){
                return jsonIO.get(global.path.config) 
            },
            set(key, val){ 
                var content = jsonIO.get(global.path.config);
                content[key] = val;
                jsonIO.set(content)
            }
        }
    }
}



module.exports = function(){
    initInfo()
    initPath()
    initMethod()
}
