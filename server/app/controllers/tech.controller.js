import config from "../config.js";
import client from "../db/connections/client.js";

export default {
  index() {
    return client.db(config.dbName).collection("tech").find().toArray();
  },
};
