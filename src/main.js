import { DaedalusCrew } from './crew/index.js';
import http from 'http';
import path from 'path';
import fs from 'fs';
import { Server } from 'socket.io';

const PORT = 3000;
const DASHBOARD_DIR = path.join(__dirname, 'dashboard');

function serveFile(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}

async function main() {
  try {
    const daedalus = new DaedalusCrew();
    console.log("Launching Project Daedalus...");
    const results = await daedalus.launch();
    console.log("System running successfully");
    console.log("Results:", results);

    const server = http.createServer((req, res) => {
      let filePath = path.join(DASHBOARD_DIR, req.url === '/' ? 'index.html' : req.url);
      serveFile(filePath, res);
    });

    const io = new Server(server);
    io.on('connection', (socket) => {
      console.log('New WebSocket connection');
      socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
      });
    });

    server.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });

  } catch (error) {
    console.error("Error launching Daedalus:", error);
    process.exit(1);
  }
}

main();