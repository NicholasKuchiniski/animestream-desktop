/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
// Modules to control application life and create native browser window
const path = require("path");
const url = require("url");

const { app, BrowserWindow, globalShortcut, protocol } = require("electron");

app.commandLine.appendSwitch("enable-transparent-visuals");
app.commandLine.appendSwitch("disable-gpu");

const port = parseInt(process.env.PORT, 10) || 3000;

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1750,
    height: 950,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
    icon: path.join(`${__dirname}/core/assets/animestream.png`),
    maximizable: false,
    resizable: true,
    transparent: true,
    frame: false,
  });

  // Config
  mainWindow.removeMenu();

  // Add shortcuts
  globalShortcut.register("f5", () => {
    mainWindow.reload();
  });

  globalShortcut.register("f6", () => {
    if (process.env.NODE_ENV === "development") {
      mainWindow.webContents.openDevTools({
        mode: "detach",
      });
    }
  });

  let startUrl;

  if (process.env.NODE_ENV === "development") {
    startUrl = `http://localhost:${port}`;
  } else {
    startUrl =
      process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, "/../build/index.html"),
        protocol: "file:",
        slashes: true,
      });
  }

  // and load the index.html of the app.
  mainWindow.loadURL(startUrl);
}

app.on("ready", () => {
  setTimeout(() => {
    createWindow();
    app.on("activate", () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  }, 200);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.


app.setAsDefaultProtocolClient("animestream");