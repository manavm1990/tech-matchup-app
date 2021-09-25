import { gql, useMutation, useQuery } from "@apollo/client";
import { Container, Section } from "components/Card";
import HR from "components/HR";
import React from "react";
import { Link, useParams } from "react-router-dom";

const GET_MATCHUP = gql`
  query matchup($_id: String!) {
    matchup(_id: $_id) {
      _id
      tech1
      tech2
      tech1Votes
      tech2Votes
    }
  }
`;

const VOTE = gql`
  mutation VoteMutation($voteTechNum: Int!, $voteId: String!) {
    vote(techNum: $voteTechNum, _id: $voteId) {
      _id
      tech1
      tech2
      tech1Votes
      tech2Votes
    }
  }
`;

function Vote() {
  const { _id } = useParams();

  const [vote] = useMutation(VOTE);
  const { loading, data } = useQuery(GET_MATCHUP, {
    variables: { _id },
  });

  const handleClick = (e) => {
    vote({
      variables: {
        voteTechNum: Number(e.target.id),
        voteId: _id,
      },
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

  return (
    <Container heading="Here is the matchup!">
      {loading ? (
        <p>Please stand by...⏳</p>
      ) : (
        // Alias for Fragment tag - avoids extra `div` tag
        <>
          <Section heading={`${data.matchup.tech1} vs ${data.matchup.tech2}`}>
            <h3 className="font-bold text-4xl text-center mt-2">
              {data.matchup.tech1Votes}&nbsp;:&nbsp;{data.matchup.tech2Votes}
            </h3>

            <div className="flex justify-between gap-2 my-2">
              {renderBtns(data.matchup)}
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
        </>
      )}
    </Container>
  );
}

export default Vote;
