import api from "@app/services";
import { Container, Section } from "components/Card";
import HR from "components/HR";
import React from "react";
// We can name this whatever as it is `export default`
import List from "./MatchupList";

function HomePage() {
  const [matchups, setMatchups] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const matchups = await api.index("matchups");
      setMatchups(matchups);
    })();
  }, []);

  return (
    <Container heading="Welcome to Tech Matchup!">
      <Section heading="Here is a list of matchups you can vote on:">
        <List matchups={matchups} />
        <HR />
      </Section>
    </Container>
  );
}

export default HomePage;
