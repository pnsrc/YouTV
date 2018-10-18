//������ ������ ���������� ���������
const { app, BrowserWindow } = require('electron')
//����������� ������������� �������
console.log('================')
console.log('YouTube TV are started')
console.log('================')
//������������ ���������� ���� ��� ������
let win
//�� ����� �������
console.log('Information')
console.log('================')
console.log('YouTV 0.0.1')
console.log('Electron version', process.versions.electron)
console.log('Chrome', process.versions.chrome)
console.log('Node.js', process.versions.node)
console.log('================')

//������� ������� Ctrl+Q �����
const { globalShortcut } = require('electron')
  app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Q', () => {
      console.log('CommandOrControl+Q is pressed')
	  app.quit()
	  
    })
  })
  
   // �������������
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
  

  // ���� ����� ����� ����������, ����� Electron ��������
  // ������������� � ����� � �������� ���� ��������.
  // ��������� ���������� API ����� �������������� ������ ����� ������������� ����� �������.
  app.on('ready', createWindow)

  // �����, ����� ��� ���� ����� �������.
  app.on('window-all-closed', () => {
    // ���������� �������� �� ��� ���, ���� ������������ �� ������ ��������� � ������� Cmd + Q,
    // ��� ������� ���� ��� ���������� � �� ������ ���� �� macOS
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
     // �� MacOS ������ ����������� ���� � ����������,
     // ����� ����, ��� �� ������ � ���� ������, � ������ �������� ���� ����.
    if (win === null) {
      createWindow()
    }
  })

