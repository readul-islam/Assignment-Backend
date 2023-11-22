"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const error_handler_1 = require("./middleware/error.handler");
const common_handler_1 = require("./middleware/common.handler");
const app = (0, express_1.default)();
// app parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// db connection
(0, db_1.default)();
app.get("/", (req, res, next) => {
    try {
        (0, common_handler_1.SendToClient)(res, { total: 19 });
    }
    catch (err) {
        next(err);
    }
});
// notFound handler
app.use("*", error_handler_1.notFound);
app.use(error_handler_1.globalErrorHandler);
exports.default = app;
