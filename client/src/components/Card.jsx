import React from "react";
import PropTypes from "prop-types";

// Component composition with special `children` prop
function Card({ heading, children }) {
  return (
    <section className="bg-white rounded-md border-black border-2 max-w-xl">
      <h1 className="bg-gray-900 font-extrabold text-4xl p-4 text-center text-gray-50">
        {heading}
      </h1>
      <div className="p-8">{children}</div>
    </section>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Card;
