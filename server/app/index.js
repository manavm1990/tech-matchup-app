import express from "express";
import pino from "express-pino-logger";
import config from "./config.js";
import techController from "./controllers/tech.controller.js";
import matchupRouter from "./router.js";

const app = express();

// Logging middleware
app.use(
  pino({
    prettyPrint: { colorize: true, levelFirst: true },
    messageFormat: "{levelLabel} - {pid} - url:{request.url}",
  })
);

app.get("/", async (_, res) => {
  try {
    const tech = await techController.index();
    res.json(tech);
  } catch (error) {
    res.status(500).json({ error });
  }
});

// TODO: Allow cors

// Allow POST requests
app.use(express.json());
app.use("/matchups", matchupRouter);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
