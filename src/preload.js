// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('darkMode', {
  //node: () => process.versions.node,
  //chrome: () => process.versions.chrome,
  //electron: () => process.versions.electron,

  //ping : () => ipcRenderer.invoke('ping'),

  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system'),
  // we can also expose variables, not just functions
})