const electron = require("electron");
const path = require("path");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const env = process.env.NODE_ENV || 'development';
  
// If development environment
if (env === 'development') {
    try {
        require('electron-reloader')(module, {
            debug: true,
            watchRenderer: true
        });
    } catch (_) { console.log('Error'); }    
}

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });
  // and load the index.html of the app.
  console.log(__dirname);
  mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);