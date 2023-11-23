"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./modules/user/routes"));
const appRouter = express_1.default.Router();
// user routes 
appRouter.use(routes_1.default);
exports.default = appRouter;
