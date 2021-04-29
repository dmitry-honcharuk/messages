import express, { json } from 'express';
import { connect as connectToDb } from './config/db';
import { PORT } from './config/env';
import routes from './module/route';

const app = express();

app.use(json());
app.use('/api', routes);

(async () => {
  await connectToDb();

  app.listen(PORT, () => console.log(`APP is running on ${PORT}`));
})();
