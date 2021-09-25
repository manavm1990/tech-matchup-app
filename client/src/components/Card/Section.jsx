import PropTypes from "prop-types";
import React from "react";

function Section({ heading, children }) {
  return (
    <section className="px-4 py-2">
      {/* Is there a heading for this? */}
      {heading ? (
        <h2 className="font-bold text-4xl text-center">{heading}</h2>
      ) : null}
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
};

export default Section;
