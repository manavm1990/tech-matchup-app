import { gql } from "apollo-server-express";

export default gql`
  type Query {
    matchups(_id: String): [Matchup]
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
    vote(_id: String!, techNum: Int!): Matchup
  }
`;
