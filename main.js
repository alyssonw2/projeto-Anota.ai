import  { app, BrowserWindow } from 'electron'
const fixPath = await import('fix-path'); 
fixPath()
const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('https://www.google.com')
  }

  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })


  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

  