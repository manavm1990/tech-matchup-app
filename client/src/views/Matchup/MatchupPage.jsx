import { gql, useMutation, useQuery } from "@apollo/client";
import { Container } from "components/Card";
import React from "react";
import { useHistory } from "react-router-dom";
import Form from "./MatchupForm";

// Define mutation
const CREATE_MATCHUP = gql`
  # ⚠️ ARGUMENTS MUST MATCH 🔑S FROM FORM SUBMISSION (e.g. name attribute)
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
      tech1Votes
      tech2Votes
    }
  }
`;

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
  const [
    // A mutate function that you can call at any time to execute the mutation
    createMatchup,
  ] = useMutation(CREATE_MATCHUP, {
    onCompleted({ createMatchup }) {
      history.push(`/matchup/${createMatchup._id}`, {
        newMatchup: createMatchup,
      });
    },
  });
  const { loading, data } = useQuery(GET_TECH);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedMatchup = Object.fromEntries(new FormData(e.target));

    createMatchup({
      variables: { ...submittedMatchup },
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
