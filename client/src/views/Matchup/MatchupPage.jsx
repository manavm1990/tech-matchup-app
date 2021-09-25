import api from "@app/services";
import { Container } from "components/Card";
import React from "react";
import { useHistory } from "react-router-dom";
import Form from "./MatchupForm";

function MatchupPage() {
  const [tech, setTech] = React.useState([]);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const submittedMatchup = Object.fromEntries(new FormData(e.target));
    api.create(submittedMatchup).then((newMatchup) => {
      history.push(`/matchup/${newMatchup._id}`, {
        newMatchup,
      });
    });
  };

  React.useEffect(
    () => {
      (async () => {
        const techData = await api.index();
        setTech(techData);
      })();
    },

    /**
     * DEPENDENCY ARRAY as the optional second argument to `useEffect`.
     * This is a way to tell React that the effect should only run when the
     * dependencies change.
     *
     * Here, it's empty so the effect will only run once - on the initial render.
     */
    []
  );

  return (
    <Container heading="Let's create a matchup!">
      <Form submitHandler={handleSubmit} techItems={tech} />
    </Container>
  );
}

export default MatchupPage;
