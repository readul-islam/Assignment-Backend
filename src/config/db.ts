import mongoose from "mongoose";
import { DB_URL } from "./index";

const dbConnection = async () => {
  try {
    mongoose.connect(DB_URL as string);
    console.log("Database connection ");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default dbConnection;
