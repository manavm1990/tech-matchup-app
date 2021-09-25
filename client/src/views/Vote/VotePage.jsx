import api from "@app/services";
import { Container, Section } from "components/Card";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Vote() {
  const [matchup, setMatchup] = React.useState({});
  const { id } = useParams();
  const {
    location: {
      state: { newMatchup },
    },
  } = useHistory();

  React.useEffect(() => {
    // Do we have a matchup from history or do we need to get it from the server?
    if (newMatchup) {
      setMatchup(newMatchup);
    } else {
      (async () => {
        const matchupData = await api.show(id);
        setMatchup(matchupData);
      })();
    }
  }, [id, newMatchup]);

  return (
    <Container heading="Here is the matchup!">
      <Section heading={`${matchup.tech1} vs ${matchup.tech2}`}>
        <h3 className="font-bold text-4xl">
          {matchup.tech1Votes}&nbsp;:&nbsp;{matchup.tech2Votes}
        </h3>
      </Section>
    </Container>
  );
}

export default Vote;
