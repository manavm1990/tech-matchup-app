import { gql } from "apollo-server-express";

export default gql`
  type Query {
    matchup(_id: String): Matchup
    matchups: [Matchup]
    tech: [Tech]
  }

  type Matchup {
    _id: ID!
    tech1: String!
    tech2: String!
    tech1Votes: Int!
    tech2Votes: Int!
  }

  type Tech {
    _id: ID!
    name: String!
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup

    # We don't necessarily need to return the matchup, but it's good to have it
    vote(_id: String!, techNum: Int!): Matchup
  }
`;
