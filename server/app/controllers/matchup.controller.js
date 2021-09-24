import { ObjectId } from "mongodb";
import config from "../config.js";
import client from "../db/connections/client.js";

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
  update(id, payload) {
    // https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#definition
    return conn.updateOne(
      { _id: ObjectId(id) },
      { $inc: { [`tech${payload}Votes`]: 1 } }
    );
  },
};
