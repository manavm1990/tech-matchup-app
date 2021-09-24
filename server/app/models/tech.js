export default ({ name } = {}) => {
  if (typeof name === "string" && name.length) {
    return { name };
  }

  throw new Error("Tech name must be a string");
};
