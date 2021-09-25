import matchupController from "../controllers/matchup.controller.js";
import techController from "../controllers/tech.controller.js";
import createMatchup from "../models/matchup.js";

// TODO: Add error handling
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
    async vote(_, { _id, techNum }) {
      // This only gives back the id
      await matchupController.update(_id, techNum);

      // This gives back the updated matchup
      return matchupController.show(_id);
    },
  },
};
