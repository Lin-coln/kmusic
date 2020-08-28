const fs = require('fs')

const get = function(path){
    if(!fs.existsSync(path)) return null;
    return JSON.parse((fs.readFileSync(path)).toString());
}
const set = function(path, content){
    fs.writeFileSync(path, JSON.stringify(content));
}
const setAsync = function(path, content){
    return new Promise(function(resolve, reject){
        fs.writeFile(path, JSON.stringify(content), (err)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            }
        })
    })
}

module.exports = {
    get: get, 
    set: set,
    setAsync: setAsync
}