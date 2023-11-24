"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const routes_1 = __importDefault(require("./routes"));
const middleware_1 = require("./middleware");
const app = (0, express_1.default)();
// app parser
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// db connection
(0, db_1.default)();
// app route
app.use("/api", routes_1.default);
app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Server Working Successfully" });
});
// notFound handler
app.use("*", middleware_1.notFound);
app.use(middleware_1.globalErrorHandler);
exports.default = app;
