const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  db: {
    read: () => ipcRenderer.invoke('db:read'),
    write: (data) => ipcRenderer.invoke('db:write', data),
    export: (data) => ipcRenderer.invoke('db:export', data),
    import: (data) => ipcRenderer.invoke('db:import', data)
  }
});
