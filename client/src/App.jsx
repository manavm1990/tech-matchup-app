import React from "react";
import "./App.css";
import HomePage from "./views/Home/HomePage";
import MatchupPage from "./views/Matchup/MatchupPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <main className="bg-dark-cyan-blue w-screen min-h-screen flex items-center justify-center">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/matchup" component={MatchupPage} />
      </Router>
    </main>
  );
}

export default App;
