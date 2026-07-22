import { app,BrowserWindow } from "electron";

const criarJanela=()=>{
    const janela = new BrowserWindow({
        
        width: 380,
        height: 600,
        resizable: false,     // Impede redimensionamento
        minimizable: true,
        maximizable: false,   // Desabilita maximizar
        autoHideMenuBar: true // Esconde a barra de menu
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
