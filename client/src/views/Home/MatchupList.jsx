import PropTypes from "prop-types";
import React from "react";

function MatchupList({ matchups }) {
  return (
    <ul className="border-1 border-color-black my-4 list-square ml-12">
      {matchups.map(({ _id: id, tech1, tech2 }) => (
        <li key={id}>
          {tech1}&nbsp;vs.&nbsp;{tech2}
        </li>
      ))}
    </ul>
  );
}

MatchupList.propTypes = {
  matchups: PropTypes.arrayOf(
    PropTypes.shape({
      // No `.isRequired` b/c it will be empty if there are no matchups
      type1: PropTypes.string,
      type2: PropTypes.string,
    })
  ).isRequired,
};

export default MatchupList;