import api from "@app/services";
import { Container, Section } from "components/Card";
import HR from "components/HR";
import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";

function Vote() {
  const [matchup, setMatchup] = React.useState({});
  const { id } = useParams();
  const {
    location: { state },
  } = useHistory();

  const handleClick = (e) => {
    const techNum = Number(e.target.id);
    api.update(matchup._id, techNum).then(() => {
      setMatchup((prevMatchup) => ({
        ...prevMatchup,
        [`tech${techNum}Votes`]: prevMatchup[`tech${techNum}Votes`] + 1,
      }));
    });
  };

  const renderBtns = (matchup) =>
    Array.from({ length: 2 }, (_, i) => ({
      buttonId: i + 1,
      text: matchup[`tech${i + 1}`],
    })).map(({ buttonId, text }) => (
      <button
        type="button"
        key={buttonId}
        id={buttonId}
        className="capitalize bg-green-500 text-xl text-white rounded-md px-4 py-2 max-w-min"
        onClick={handleClick}
      >
        {text}
      </button>
    ));

  React.useEffect(() => {
    // Do we have a matchup from history or do we need to get it from the server?
    if (state?.newMatchup) {
      setMatchup(state?.newMatchup);
    } else {
      (async () => {
        const matchupData = await api.show(id);
        setMatchup(matchupData);
      })();
    }
  }, [id, state?.newMatchup]);

  return (
    <Container heading="Here is the matchup!">
      <Section heading={`${matchup.tech1} vs ${matchup.tech2}`}>
        <h3 className="font-bold text-4xl text-center mt-2">
          {matchup.tech1Votes}&nbsp;:&nbsp;{matchup.tech2Votes}
        </h3>

        <div className="flex justify-between gap-2 my-2">
          {renderBtns(matchup)}
        </div>
        <HR />
      </Section>
      <Section>
        <div className="flex my-2 justify-center">
          <Link
            to="/"
            className="capitalize bg-red-500 text-xl text-white rounded-md px-6 py-2"
          >
            View all matchups
          </Link>
        </div>
      </Section>
    </Container>
  );
}

export default Vote;
