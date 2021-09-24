import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  dbClientUrl:
    process.env.DB_CLIENT_URL ||
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000",
  dbName: "techdb",
};
