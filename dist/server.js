"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
app_1.default.get('/', (req, res) => {
    res.status(200).json({ success: true, message: "Server Working Successfully" });
});
app_1.default.listen(config_1.port, () => {
    console.log(`Server started on port ${config_1.port}`);
});
