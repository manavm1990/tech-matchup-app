import PropTypes from "prop-types";
import React from "react";

function Section({ heading, children }) {
  return (
    <section className="p-4">
      {/* Is there a heading for this? */}
      {heading ? <h2 className="font-bold text-4xl">{heading}</h2> : null}
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
};

export default Section;
