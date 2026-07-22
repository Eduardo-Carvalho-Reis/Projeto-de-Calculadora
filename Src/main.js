import { app,BrowserWindow } from "electron";

const criarJanela=()=>{
    const janela = new BrowserWindow({
        width:800,
        height: 600
    })

    janela.loadFile('src/view/index.html')

}

app.whenReady().then(()=>{
    criarJanela();
    
    app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
