const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

var py_path = global.path.lib('execute.py')
var execute = function(){
    if(!fs.existsSync(py_path)) {
        console.log('Python File is not exist')
        return;
    }
    exec('python '+py_path,function(error,stdout,stderr){
        if(stdout.length >1){
            console.log('you offer args:',stdout);
        } else {
            console.log('you don\'t offer args');
        }
        if(error) {
            console.info('stderr : '+stderr);
        }
    });
}

module.exports = execute