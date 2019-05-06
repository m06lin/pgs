import { app, BrowserWindow ,ipcMain, shell } from 'electron' // eslint-disable-line
import '../renderer/store';
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */

if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}

let mainWindow;

const winURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9080'
  : `file://${__dirname}/index.html`;

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 660,
    useContentSize: true,
    width: 990,
    // webPreferences: {
    //   webSecurity: false, // try accept cross site request
    // },
  });
  mainWindow.setResizable(false); // close change window size
  mainWindow.setMenuBarVisibility(false); // close electron menu
  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
// app.commandLine.appendSwitch('disable-web-security'); // try accept cross site request

// mainWindow.webContents.session.webRequest.onHeadersReceived((detail, callback) => {
//   detail.responseHeaders['Access-Control-Allow-Origin'] = ['local://ekoenko'];
//   detail.responseHeaders['Access-Control-Allow-Credentials'] = ['true'];
//   callback({
//     responseHeaders: detail.responseHeaders,
//   });
// });

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('full-window', () => {
  mainWindow.maximize();
  mainWindow.setFullScreen(true);
  mainWindow.setResizable(true);
});
// ipcMain.on('full-window', () => {
//   mainWindow.setResizable(true);
// });

ipcMain.on('logout', () => {
  mainWindow.setFullScreen(false);
  mainWindow.setContentSize(990, 660);
  mainWindow.center();
});

ipcMain.on('exit', () => {
  mainWindow.close();
});

// ipcMain.on('login', (event, data) => {
//   // const response = {};

//   // axios.get('http://localhost:3000/user').then((res) => {
//   //   const userData = res.data;

//   //   if (userData.username === data.username && userData.password === data.password) {
//   //     response.isSuccess = true;
//   //     response.userData = userData;
//   //   } else {
//   //     response.isSuccess = false;
//   //     response.msg = '帳號或密碼錯誤';
//   //   }
//   //   event.returnValue = response;
//   // }).catch((err) => {
//   //   console.log(err);
//   //   response.isSuccess = false;
//   //   response.msg = '系統錯誤';
//   //   event.returnValue = response;
//   // });

//   // test
//   axios.get('http://localhost:3000/user').then((res) => {
//     const userData = res.data;
//     const response = {};
//     if (userData.username === data.username && userData.password === data.password) {
//       response.isSuccess = true;
//       response.userData = userData;
//     } else {
//       response.isSuccess = false;
//       response.msg = '帳號或密碼錯誤';
//     }
//     // event.returnValue = response;
//     return response;
//   }).catch((err) => {
//     console.log(err);
//     const response = {};
//     response.isSuccess = false;
//     response.msg = '系統錯誤';
//     // event.returnValue = response;

//     return response;
//   }).then((response) => {
//     event.returnValue = response;
//   });
// });

// async function waitFor5Sec() {
//   // return new Promise((resolve) => {
//   //   setTimeout(() => {
//   //     resolve();
//   //   }, 5000);
//   // });
//   // return Promise.resolve({
//   //   foo: 'bar',
//   // });

//   return '';
// }

// test
// ipcMain.on('login', async (event, data) => {
//   let response = {};
//   try {
//     const res = await axios.get('http://localhost:3000/user');
//     const foo = await waitFor5Sec();
//     console.log(foo);

//     const userData = res.data;
//     if (userData.username === data.username && userData.password === data.password) {
//       response = {
//         isSuccess: true,
//         userData,
//       };
//     } else {
//       response = {
//         isSuccess: false,
//         msg: '帳號或密碼錯誤',
//       };
//     }
//   } catch (error) {
//     console.log(error);
//     response = {
//       isSuccess: false,
//       msg: '系統錯誤',
//     };
//   }

//   event.returnValue = response;
// });

// ipcMain.on('getData', (event) => {
//   setTimeout(() => {
//     event.sender.send('api', 'ok');
//     mainWindow.maximize();
//     mainWindow.setFullScreen(true);
//   }, 3000);
// });


// ipcMain.on('login', (event, data) => {
//   const udata = data;
//   const response = {};
//   response.isSuccess = true;
//   response.userData = udata;
//   event.returnValue = response;
// });

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
