const app = require('express')();
const http = require('http').Server(app);
const { Server } = require('socket.io');

const PORT = 9999;

const TOPICS = {
  LIST_ADDED: 'LIST_ADDED',
  ITEM_ADDED: 'ITEM_ADDED',
};

const io = new Server(http, {
  cors: {
    origin: '*',
  },
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on(TOPICS.LIST_ADDED, (msg) => {
    socket.broadcast.emit(TOPICS.LIST_ADDED, msg);
  });

  socket.on(TOPICS.ITEM_ADDED, (msg) => {
    socket.broadcast.emit(TOPICS.ITEM_ADDED, msg);
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
