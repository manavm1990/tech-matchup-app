export default ({ tech1, tech2, tech1Votes = 0, tech2Votes = 0 } = {}) => {
  if (
    typeof tech1 === "string" &&
    tech1.length &&
    typeof tech2 === "string" &&
    tech2.length &&
    typeof tech1Votes === "number" &&
    typeof tech2Votes === "number"
  ) {
    return {
      tech1,
      tech2,
      tech1Votes,
      tech2Votes,
    };
  }

  // "ValidationError" can be used to assign the correct status code
  throw new Error("ValidationError: Invalid parameters");
};
