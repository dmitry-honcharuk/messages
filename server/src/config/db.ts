import mongoose from 'mongoose';
import { MONGO_CONNECTION_URL } from './env';

export async function connect() {
  try {
    console.log(MONGO_CONNECTION_URL);

    await mongoose.connect(MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to DB');
  } catch (error) {
    console.log('Error connecting to DB');
    console.log(error);
  }
}
