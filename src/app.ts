import cors from "cors";
import express, { Application } from "express";
import dbConnection from "./config/db";
import { globalErrorHandler, notFound } from "./middleware/error.handler";
import { SendToClient } from "./middleware/common.handler";
const app: Application = express();

// app parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnection();

app.get("/", (req, res, next) => {
  try {
    SendToClient(res, { total: 19 });
  } catch (err) {
    next(err);
  }
});

// notFound handler
app.use("*", notFound);

app.use(globalErrorHandler);

export default app;
