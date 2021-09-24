import Router from "express";
import matchupController from "./controllers/matchup.controller.js";
import createMatchup from "./models/matchup.js";

const router = new Router();

// /matchups/
router.post("/", async ({ body }, res) => {
  try {
    const validatedMatchup = createMatchup(body);
    const { insertedId } = await matchupController.create(validatedMatchup);
    res.status(201).json(insertedId);
  } catch (error) {
    // Assign correct status code - client issue or server issue?
    if (error.message.startsWith("ValidationError")) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

export default router;
