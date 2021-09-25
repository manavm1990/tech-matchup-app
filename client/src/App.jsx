import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/Home/HomePage";
import MatchupPage from "./views/Matchup/MatchupPage";
import Vote from "./views/Vote/VotePage";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <main className="bg-dark-cyan-blue w-screen min-h-screen flex items-center justify-center">
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/matchup" component={MatchupPage} />
          <Route exact path="/matchup/:_id" component={Vote} />
        </Router>
      </ApolloProvider>
    </main>
  );
}

export default App;
