import PropTypes from "prop-types";
import React from "react";

function Section({ heading, children }) {
  return (
    <section className="p-4">
      <h2 className="font-bold text-4xl">{heading}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Section;
