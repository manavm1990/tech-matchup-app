import config from "../config.js";
import client from "../db/connections/client.js";
import { ObjectId } from "mongodb";

const conn = client.db(config.dbName).collection("matchups");

export default {
  create(payload) {
    // https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/#definition
    return conn.insertOne(payload);
  },
  index() {
    // https://docs.mongodb.com/manual/reference/method/db.collection.find/#definition
    return conn.find().toArray();
  },
  show(id) {
    // https://docs.mongodb.com/manual/reference/method/db.collection.findOne/#definition
    return conn.findOne({ _id: ObjectId(id) });
  },
};
