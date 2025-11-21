const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
const dbPath = path.join(app.getPath('userData'), 'database.json');

// Cria a janela principal
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    },
    icon: path.join(__dirname, 'build/icon.png')
  });

  mainWindow.loadFile('index.html');
  
  // Abre dev tools em desenvolvimento (comentar em produção)
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// IPC - Ler dados do banco
ipcMain.handle('db:read', async () => {
  try {
    if (fs.existsSync(dbPath)) {
      const data = fs.readFileSync(dbPath, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Erro ao ler banco:', error);
    return [];
  }
});

// IPC - Salvar dados no banco
ipcMain.handle('db:write', async (event, data) => {
  try {
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');
    return { success: true };
  } catch (error) {
    console.error('Erro ao salvar banco:', error);
    return { success: false, error: error.message };
  }
});

// IPC - Exportar JSON
ipcMain.handle('db:export', async (event, data) => {
  try {
    const downloadsPath = app.getPath('downloads');
    const filename = `perifericos_backup_${new Date().toISOString().split('T')[0]}.json`;
    const filepath = path.join(downloadsPath, filename);
    fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf-8');
    return { success: true, path: filepath };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

// IPC - Importar JSON
ipcMain.handle('db:import', async (event, data) => {
  try {
    return { success: true, data: data };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

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

// Handle squirrel events (Windows installer)
if (require('electron-squirrel-startup')) {
  app.quit();
}
