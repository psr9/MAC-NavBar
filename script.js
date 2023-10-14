const { ipcRenderer } = require("electron");

document.querySelector("#close").addEventListener("click", () => {
  ipcRenderer.send("manualClose");
});
document.querySelector("#minimize").addEventListener("click", () => {
  ipcRenderer.send("manualMinimize");
});
document.querySelector("#maximize").addEventListener("click", () => {
  ipcRenderer.send("manualMaximize");
});