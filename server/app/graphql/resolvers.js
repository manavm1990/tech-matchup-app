import matchupController from "../controllers/matchup.controller.js";
import techController from "../controllers/tech.controller.js";
import createMatchup from "../models/matchup.js";

// TODO: Add error handling
export default {
  Query: {
    matchup(_, { _id }) {
      return matchupController.show(_id);
    },
    matchups() {
      return matchupController.index();
    },
    tech() {
      return techController.index();
    },
  },
  Mutation: {
    async createMatchup(_, { tech1, tech2 }) {
      const validatedMatchup = createMatchup({ tech1, tech2 });

      // Get the newly created id from MongoDB
      const { insertedId: _id } = await matchupController.create(
        validatedMatchup
      );

      // Mixin the id with the original matchup object
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
