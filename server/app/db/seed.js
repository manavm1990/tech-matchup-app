import config from "../config.js";
import client from "./connections/once.js";
import techData from "./techData.json";

(async () => {
  try {
    const conn = await client.connect();
    await conn.db(config.dbName).collection("tech").insertMany(techData);
    await conn.close();
    console.info("Technologies seeded! 🌱 🗃️ ");
  } catch (err) {
    console.error(err.message);
  }
})();
