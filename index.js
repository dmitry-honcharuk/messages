const app = require('express')();
const http = require('http').Server(app);
const { Server } = require('socket.io');

const PORT = 9999;

const TOPICS = {
  ITEM_ADDED: 'ITEM_ADDED',
  ITEM_TOGGLED: 'ITEM_TOGGLED',
  ITEM_CONTENT_CHANGED: 'ITEM_CONTENT_CHANGED',
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
  console.log('connection');
  Object.keys(TOPICS).forEach((topic) => {
    socket.on(topic, (msg) => {
      console.log('EVENT', topic);
      socket.broadcast.emit(topic, msg);
    });
  });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
