import PropTypes from "prop-types";
import React from "react";

const classes = "bg-white rounded-md border-black border-2";

// Component composition with special `children` prop
function Container({ heading, children, maxWidth }) {
  return (
    <section className={`${classes} ${maxWidth}`}>
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
  maxWidth: PropTypes.string,
};

Container.defaultProps = {
  maxWidth: "max-w-xl",
};

export default Container;
