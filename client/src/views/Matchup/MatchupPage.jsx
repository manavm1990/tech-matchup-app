import { gql, useQuery } from "@apollo/client";
import api from "@app/services";
import { Container } from "components/Card";
import React from "react";
import { useHistory } from "react-router-dom";
import Form from "./MatchupForm";

const GET_TECH = gql`
  query Query {
    tech {
      _id
      name
    }
  }
`;

function MatchupPage() {
  // TODO: 🥅
  const { loading, data } = useQuery(GET_TECH);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedMatchup = Object.fromEntries(new FormData(e.target));
    api.create(submittedMatchup).then((newMatchup) => {
      history.push(
        `/matchup/${newMatchup._id}`,
        // We can add some state here to pass to the next view.
        // https://github.com/remix-run/history/blob/main/docs/navigation.md#history-api-navigate
        {
          newMatchup,
        }
      );
    });
  };

  return (
    <Container heading="Let's create a matchup!">
      {loading ? (
        <p>Please stand by...⏳</p>
      ) : (
        <Form submitHandler={handleSubmit} techItems={data.tech} />
      )}
    </Container>
  );
}

export default MatchupPage;
