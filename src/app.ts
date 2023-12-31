import cors from "cors";
import express, { Application } from "express";
import dbConnection from "./config/db";

import appRouter from "./routes";
import { globalErrorHandler, notFound } from "./middleware";
const app: Application = express();

// app parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
dbConnection();

// app route
app.use("/api", appRouter);

app.get('/',(req, res)=>{
    res.status(200).json({success:true,message:"Server Working Successfully"})
    })

// notFound handler
app.use("*", notFound);

app.use(globalErrorHandler);

export default app;
