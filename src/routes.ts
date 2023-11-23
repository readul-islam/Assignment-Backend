import express from "express";
import userRoutes from "./modules/user/routes"

const appRouter = express.Router();


// user routes 
appRouter.use(userRoutes)



export default appRouter;