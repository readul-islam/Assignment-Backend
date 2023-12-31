"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.bcrypt_salt = exports.DB_URL = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), ".env") });
const port = process.env.PORT || 3000;
exports.port = port;
const DB_URL = process.env.DB_URL;
exports.DB_URL = DB_URL;
const bcrypt_salt = 10;
exports.bcrypt_salt = bcrypt_salt;
