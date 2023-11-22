import mongoose from "mongoose";
import {DB_URL, port} from './index'

const dbConnection = async () => {
  try {
    mongoose.connect(DB_URL as string);
    console.log('Database connection ')
  } catch (err) {

  }
};


export default dbConnection