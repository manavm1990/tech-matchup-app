import { gql, useQuery } from "@apollo/client";
import { Container, Section } from "components/Card";
import HR from "components/HR";
import React from "react";
import { Link } from "react-router-dom";
// We can name this whatever as it is `export default`
import List from "./MatchupList";

const GET_MATCHUPS = gql`
  query Query {
    matchups {
      _id
      tech1
      tech2
      tech1Votes
      tech2Votes
    }
  }
`;

function HomePage() {
  // TODO: 🥅
  const { loading, data } = useQuery(GET_MATCHUPS);

  return (
    <Container heading="Welcome to Tech Matchup!">
      <Section heading="Here is a list of matchups you can vote on:">
        {loading ? (
          <p>Please stand by...⏳</p>
        ) : (
          <List matchups={data.matchups} />
        )}
        <HR />
      </Section>
      <Section heading="Ready to create a new matchup?">
        <div className="flex my-2 justify-center">
          <Link
            to="/matchup"
            className="capitalize bg-red-500 text-xl text-white rounded-md px-6 py-2"
          >
            Create matchup!
          </Link>
        </div>
      </Section>
    </Container>
  );
}

export default HomePage;
