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
