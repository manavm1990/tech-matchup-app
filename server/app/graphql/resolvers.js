import techController from "../controllers/tech.controller.js";
import matchupController from "../controllers/matchup.controller.js";

export default {
  Query: {
    matchups(_, { id }) {
      return id ? matchupController.show(id) : matchupController.index();
    },
    tech() {
      return techController.index();
    },
  },
};
