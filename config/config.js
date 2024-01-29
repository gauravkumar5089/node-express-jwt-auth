import { config } from "dotenv";

config();

const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/iNotebook";
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

export default {
  PORT,
  MONGODB_URI,
  BACKEND_URL,
};
