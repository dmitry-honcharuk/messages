import express  from 'express';
import mongoose from 'mongoose';
import http from 'http';
import dotenv from 'dotenv';
import routes from './module/route';
import { Server } from "socket.io";
import service from "./module/event/service";
import { DEFAULT_TOPICS } from "./module/event/model";


const app: express.Application = express();
const server: http.Server = http.createServer(app);

dotenv.config();

const PORT = 9999;

let TOPICS: typeof DEFAULT_TOPICS;
// app.use(cors());
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});
//
app.get('/', async (req, res) => {
  TOPICS = await service.readEvents();
  console.log('TOPICS', TOPICS)
  res.sendFile(__dirname + '/index.html');
});
//
io.on('connection', (socket) => {
  console.log('connection');
  Object.keys(TOPICS).forEach((topic) => {
    socket.on(topic, (msg) => {
      console.log('EVENT', topic);
      socket.broadcast.emit(topic, msg);
    });
  });
});

app.use('/api', routes);

mongoose.connect('mongodb+srv://admin:9A5PN87Yok0h5b3B@main.sljct.mongodb.net/messages?', { useNewUrlParser: true, useUnifiedTopology: true  }, (err: mongoose.CallbackError) => {
  if(err) return console.log(err)
  console.log('DB was connected')
  app.listen(PORT, () => console.log(`APP running on ${PORT}`));
})
