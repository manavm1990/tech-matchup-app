import Router from "express";
import matchupController from "./controllers/matchup.controller.js";
import createMatchup from "./models/matchup.js";

const router = new Router();

// /matchups/
router.get("/", async (_, res) => {
  try {
    const matchups = await matchupController.index();
    res.status(200).json(matchups);
  } catch (err) {
    res.status(500).json(err);
  }
});

// /matchups/:id
router.get("/:id", async ({ params: { id } }, res) => {
  try {
    const matchup = await matchupController.show(id);
    res.status(200).json(matchup);
  } catch (err) {
    res.status(500).json(err);
  }
});

// /matchups/
router.post("/", async ({ body }, res) => {
  try {
    const validatedMatchup = createMatchup(body);
    const { insertedId } = await matchupController.create(validatedMatchup);
    res.status(201).json({
      // Keeping 🔑 consistent with Mongo
      _id: insertedId,
      ...validatedMatchup,
    });
  } catch (error) {
    // Assign correct status code - client issue or server issue?
    if (error.message.startsWith("ValidationError")) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

// /matchups/:id
router.put("/:id", async ({ body: { techNum }, params: { id } }, res) => {
  try {
    if (typeof techNum === "number") {
      const matchup = await matchupController.update(id, techNum);
      res.status(200).json(matchup);
    } else {
      res.status(400).json({ error: "Must be a number!" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
