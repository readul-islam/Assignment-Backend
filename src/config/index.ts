import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const bcrypt_salt = 10;

export { DB_URL, bcrypt_salt, port };
