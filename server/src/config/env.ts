import dotenv from 'dotenv';

dotenv.config();

export const MONGO_CONNECTION_URL: string = process.env
  .MONGO_CONNECTION_URL as string;

export const PORT: number = Number(process.env.PORT as string);
