///<reference path="C:/Users/LinColn/AppData/Roaming/npm/node_modules/electron/electron.d.ts" />

const { app, BrowserWindow } = require('electron');

let mainWindow

const isFirst = app.requestSingleInstanceLock()
if(!isFirst) { 
  app.quit() 
}else{
  app.on('second-instance', (event, commandLine, workingDirectory) => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
      mainWindow.show()
    }
  })
}


app.on('will-finish-launching', ()=>{
  require(require('path').join(app.getAppPath(), 'build', 'init'))()
  require(require('path').join(app.getAppPath(), 'build', 'checkFile'))()
})
app.on('ready', ()=>{
    mainWindow = createWindow(global.path.index);
    mainWindow.webContents.on("did-finish-load", (event, args) => {
      mainWindow.webContents.setZoomFactor(1);
      mainWindow.webContents.setVisualZoomLevelLimits(1, 1);
    })
})
app.on('window-all-closed', ()=>{
  app.quit()
})
app.on('before-quit', ()=>{

})
app.on('quit',()=>{
  
})



function createWindow (windowPath, dev=false) {
  const { screen } = require('electron');
  var winWidth = 1200, winHeight = 760;
  var size = screen.getPrimaryDisplay().workAreaSize;
  var winX = (size.width-winWidth)/2;
  var winY = (size.height-winHeight)/2;

  mainWindow = new BrowserWindow({
      x: winX, y: winY,
      width: winWidth, 
      height: winHeight,
      minWidth: 1200, 
      minHeight: 700,
      resizable: true,
      center: true,
      frame: false,
      webPreferences: {
          nodeIntegration: true,
          webviewTag: true
      },


  });
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  mainWindow.loadFile(windowPath)
  if(dev) mainWindow.webContents.openDevTools()
  return mainWindow
}





const { ipcMain } = require('electron')
ipcMain.on('browserWindowUtil', (event, arg)=>{
  switch(arg){
    case 'close':{
      BrowserWindow.getFocusedWindow().close();
      break
      }
    case 'minimize':{
      BrowserWindow.getFocusedWindow().minimize();
      break
      }
    case 'maximize':{
      if(BrowserWindow.getFocusedWindow().isMaximized()){
        BrowserWindow.getFocusedWindow().unmaximize()
      }else BrowserWindow.getFocusedWindow().maximize();
    }
  }
  event.returnValue = null
})


ipcMain.on('test', (event, arg)=>{

  const exe = require(global.path.lib('execute'))

  exe()

  event.returnValue = null
})

ipcMain.on('getPic', (event, arg)=>{
  console.log(global.path.public(arg+'.jpg'))
  event.returnValue = global.path.res('img', arg+'.jpg')
})

