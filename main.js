const { BrowserWindow, app, ipcMain } = require("electron");

let win;
function createWindow() {
  win=new BrowserWindow({
    height: 600,
    width: 1020,
    frame: false, // hides close, maximize, minimize, and title bar.
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.setMenuBarVisibility(false); // hide file, view, etc.
  win.loadFile("index.html");
  win.on("closed", () => {
    win=null;
  });
}

let windowMaximized=false; // 600x1020 (non-maximized) by default
ipcMain.on("manualClose", () => {
  app.quit();
});
ipcMain.on("manualMinimize", () => {
  win.minimize();
});
ipcMain.on("manualMaximize", () => {
  if (windowMaximized) {
    win.unmaximize();
  } else {
    win.maximize();
  }
  windowMaximized=!windowMaximized; // flip the value of "windowMaximized"
});

app.on("ready", createWindow);