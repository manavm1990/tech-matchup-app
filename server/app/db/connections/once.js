// Loads a reusable Mongo client for the application.
import { MongoClient } from "mongodb";
import config from "../../config.js";

const client = new MongoClient(config.dbClientUrl);

// Basically, on and off switches for the client connection.
export default {
  connect() {
    return client.connect();
  },
  close() {
    client.close().then(() => {
      console.info("MongoDB Client disconnected");
      process.exit(0);
    });
  },
};
