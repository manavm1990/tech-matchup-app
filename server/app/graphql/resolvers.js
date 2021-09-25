import matchupController from "../controllers/matchup.controller.js";
import techController from "../controllers/tech.controller.js";
import createMatchup from "../models/matchup.js";

export default {
  Query: {
    matchups(_, { id }) {
      return id ? matchupController.show(id) : matchupController.index();
    },
    tech() {
      return techController.index();
    },
  },
  Mutation: {
    createMatchup(_, { tech1, tech2 }) {
      const validatedMatchup = createMatchup({ tech1, tech2 });
      const { insertedId: _id } = matchupController.create(validatedMatchup);
      return { ...validatedMatchup, _id };
    },
    vote({ _id, techNum }) {
      return matchupController.update(_id, techNum);
    },
  },
};
