const { ipcRenderer } = window.require('electron')
const winBtnMethods = {
    windowClose()   { ipcRenderer.sendSync('browserWindowUtil', 'close') },
    windowMaximize(){ ipcRenderer.sendSync('browserWindowUtil', 'maximize') },
    windowMinimize(){ ipcRenderer.sendSync('browserWindowUtil', 'minimize') },
}

export default winBtnMethods