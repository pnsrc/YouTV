const { app, BrowserWindow } = require('electron')
console.log('================')
console.log('Apps are started')
console.log('================')

  // Храните глобальную ссылку на объект окна, если вы этого не сделаете, окно будет
  // автоматически закрываться, когда объект JavaScript собирает мусор.
  let win
 
 //Запускаем процедуру репортов 
 const {crashReporter} = require('electron')
 console.log('Crash daemon a started')
 
 //Реализуем поддержку глобальных горячих клавиш 
 
//Горячие клавииш Ctrl+Q выход
const { globalShortcut } = require('electron')
  app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Q', () => {
      console.log('Apps Now cloasing. Code : 02')
	  app.quit()
	  
    })
  })
    app.on('ready', () => {
    globalShortcut.register('CommandOrControl+A', () => {
      console.log('Thank for you downloading.')
      console.log('In my mind. Yeaah !')	  
	  win.loadURL('https://vk.com/pnsrc')
	  
    })
  })
  
    app.on('ready', () => {
    globalShortcut.register('CommandOrControl+F12', () => {
	win.webContents.openDevTools()
      console.log('Console open.')
    })
  })
    app.on('ready', () => {
    globalShortcut.register('CommandOrControl+H', () => {
    win.loadFile('help.html')
	console.log('Help open.')
    })
  })
  
  crashReporter.start({
    productName: 'Alexey Alenich',
    companyName: 'pnsrc',
    submitURL: 'http://test.ru/app',
    uploadToServer: false ,
	crashesDirectory: '/crash'
  })
console.log('================')
console.log('Information')
console.log('================')
console.log('YouTV 0.0.1')
console.log('Electron version', process.versions.electron)
console.log('Chrome', process.versions.chrome)
console.log('Node.js', process.versions.node)
console.log('================')
  function createWindow () {
    // Создаёт окно браузера.
	
    win = new BrowserWindow({ width: 800, height: 600, fullscreen: true, frame: false })
	 console.log('Windows will be created')

    // Загружаем майн фрамей
    win.loadFile('index.html')
	 console.log('Main frame will be creates')
	

    // Открыть средства разработчика.
    //win.webContents.openDevTools()
	 //console.log('It is a version for testing people. All bags senf to pnsrc@yandex.ru ')

    // Вызывается, когда окно будет закрыто.
    win.on('closed', () => {
      // Разбирает объект окна, обычно вы можете хранить окна
      // в массиве, если ваше приложение поддерживает несколько окон в это время,
      // тогда вы должны удалить соответствующий элемент.
      win = null
    })
	
  }

  // Этот метод будет вызываться, когда Electron закончит
  // инициализацию и готов к созданию окон браузера.
  // Некоторые интерфейсы API могут использоваться только после возникновения этого события.
  app.on('ready', createWindow)

  // Выйти, когда все окна будут закрыты.
  app.on('window-all-closed', () => {
    // Оставаться активным до тех пор, пока пользователь не выйдет полностью с помощью Cmd + Q,
    // это обычное дело для приложений и их строки меню на macOS
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
     // На MacOS обычно пересоздают окно в приложении,
     // после того, как на иконку в доке нажали, и других открытых окон нету.
    if (win === null) {
      createWindow()
    }
  })

  // В этом файле вы можете включить код другого основного процесса
  // вашего приложения. Можно также поместить их в отдельные файлы и применить к ним require.
