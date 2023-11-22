import dotenv from 'dotenv';
import path from 'path'
dotenv.config({path: path.join(process.cwd(),'.env')});

const port = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

export { port, DB_URL };
