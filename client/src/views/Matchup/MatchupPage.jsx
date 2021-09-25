import api from "@app/services";
import { Container, Section } from "components/Card";
import React from "react";
import Select from "./TechSelect";

const renderSections = (techItems) =>
  // Create an Array of two Objects, each with keys for `id` and `label`
  Array.from({ length: 2 }, (_, i) => ({
    // `i` is the index of the current iteration
    id: `tech${i + 1}`,
    label: `Tech ${i + 1}`,

    // Same techItems will be used for both Selects
    techItems,
  })).map((section) => (
    <Section key={section.id}>
      {/* Props can be directly spread in instead of passing each one individually */}
      <Select {...section} />
    </Section>
  ));

function MatchupPage() {
  const [tech, setTech] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    api.create(Object.fromEntries(new FormData(e.target)));
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
    <Container heading="Let's create a matchup!" maxWidth="max-w-xs">
      <form
        className="flex flex-col items-center gap-2 mb-6"
        onSubmit={handleSubmit}
      >
        {renderSections(tech)}
        <button
          type="submit"
          className="capitalize bg-red-500 text-xl text-white rounded-md px-6 py-2 max-w-min"
        >
          {" "}
          <span className="whitespace-nowrap">Create matchup!</span>
        </button>
      </form>
    </Container>
  );
}

export default MatchupPage;
