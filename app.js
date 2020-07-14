const { app, BrowserWindow } = require("electron");
const path = require("path");
const { spawn } = require("child_process");
const findFreePorts = require("find-free-ports");

let routerProcess;

function createRouterProcess(port) {
  const process = spawn("npx", [
    "ftrouter",
    "--dir",
    "/server/routes",
    "--port",
    port,
  ]);

  process.stdout.on("data", (data) => {
    console.log(Buffer.from(data).toString());
  });

  process.stderr.on("data", (data) => {
    console.error(Buffer.from(data).toString());
  });

  return process;
}

async function createWindow() {
  const port = await findFreePorts(1);
  routerProcess = createRouterProcess(port);
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "PUI",
    titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile(path.join("client", "dist", "index.html"), {
    query: {
      port: port,
    },
  });
}

app.on("window-all-closed", () => {
  routerProcess.kill("SIGINT");

  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.whenReady().then(createWindow);
