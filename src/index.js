const {app, BrowserWindow} =  require('electron');
let mainWindow;

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        resizable:false,
        width:530,
        height:640,
        show:false
    })
    mainWindow.loadURL(`file://${process.cwd()}/src/index.html`);
    mainWindow.once('ready-to-show', ()=>{
        mainWindow.show()
    })
})