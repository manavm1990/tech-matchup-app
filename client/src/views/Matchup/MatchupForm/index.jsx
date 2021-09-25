import { Section } from "components/Card";
import PropTypes from "prop-types";
import React from "react";
import Select from "./TechSelect";

const renderSections = (techItems) =>
  // Create an Array of two Objects, each with keys for `id` and `label`
  Array.from({ length: 2 }, (_, i) => ({
    // `i` is the index of the current iteration
    id: `tech${i + 1}`,
    label: `Tech ${i + 1}`,

    // Same techItems will be used for both Selects
    techItems,
  })).map((section) => (
    <Section key={section.id}>
      {/* Props can be directly spread in instead of passing each one individually */}
      <Select {...section} />
    </Section>
  ));

function MatchupForm({ submitHandler, techItems }) {
  return (
    <form
      className="flex flex-col items-center gap-2 mb-6"
      onSubmit={submitHandler}
    >
      {renderSections(techItems)}
      <button
        type="submit"
        className="capitalize bg-red-500 text-xl text-white rounded-md px-6 py-2 max-w-min"
      >
        {" "}
        <span className="whitespace-nowrap">Create matchup!</span>
      </button>
    </form>
  );
}

MatchupForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  techItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MatchupForm;
