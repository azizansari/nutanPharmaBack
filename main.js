const { app, BrowserWindow } = require("electron");
require("./bin/www");

const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile(path.join(__dirname, "dist/index.html"));
  win.webContents.openDevTools()
  // win.loadURL('http://localhost:3001')

}
console.log("path.join", path.join(__dirname, "dist/index.html"));

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();

  }
});
