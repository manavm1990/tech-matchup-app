import PropTypes from "prop-types";
import React from "react";

// Component composition with special `children` prop
function Container({ heading, children }) {
  return (
    <section className="bg-white rounded-md border-black border-2 max-w-screen-lg">
      <h1 className="bg-gray-900 font-extrabold text-4xl p-4 text-center text-gray-50">
        {heading}
      </h1>
      {children}
    </section>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default Container;
