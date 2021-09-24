import api from "@app/services";
import Card from "components/Card";
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
    <Card heading="Welcome to Tech Matchup!">
      <h2 className="font-bold text-4xl">
        Here is a list of matchups you can vote on:
      </h2>
      <List matchups={matchups} />
      <HR />
    </Card>
  );
}

export default HomePage;
