import PropTypes from "prop-types";
import React from "react";

function TechSelect({ id, label, techItems }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}:</label>
      <select id={id} name={id}>
        {techItems.map(({ _id: id, name }) => (
          <option key={id}>{name}</option>
        ))}
      </select>
    </div>
  );
}

TechSelect.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  techItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
};

export default TechSelect;
