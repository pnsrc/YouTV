//ƒелаем запуск приложени€ возможным
const { app, BrowserWindow } = require('electron')
//ќб€зательно конспектируем консоль
console.log('================')
console.log('YouTube TV are started')
console.log('================')
//ќграничитель закрывани€ окна при мусоре
let win
//Ќе много консоли
console.log('Information')
console.log('================')
console.log('YouTV 0.0.1')
console.log('Electron version', process.versions.electron)
console.log('Chrome', process.versions.chrome)
console.log('Node.js', process.versions.node)
console.log('================')

//√ор€чие клавииш Ctrl+Q выход
const { globalShortcut } = require('electron')
  app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Q', () => {
      console.log('CommandOrControl+Q is pressed')
	  app.quit()
	  
    })
  })
  
   // »ницилизируем
  function createWindow () {
  const {BrowserView, BrowserWindow} = require('electron')
  let win = new BrowserWindow({width: 800, height: 600, fullscreen: true, frame: false})
  win.on('closed', () => {
    win = null
  })
   win.loadFile('index.html')   
  const ses = win.webContents.session
  console.log(ses.getUserAgent())
  
 }
  

  // Ётот метод будет вызыватьс€, когда Electron закончит
  // инициализацию и готов к созданию окон браузера.
  // Ќекоторые интерфейсы API могут использоватьс€ только после возникновени€ этого событи€.
  app.on('ready', createWindow)

  // ¬ыйти, когда все окна будут закрыты.
  app.on('window-all-closed', () => {
    // ќставатьс€ активным до тех пор, пока пользователь не выйдет полностью с помощью Cmd + Q,
    // это обычное дело дл€ приложений и их строки меню на macOS
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
     // Ќа MacOS обычно пересоздают окно в приложении,
     // после того, как на иконку в доке нажали, и других открытых окон нету.
    if (win === null) {
      createWindow()
    }
  })

