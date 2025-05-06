export const typeDefs = `#graphql
  type Racer {
    id: ID!
    name: String!
    country: String!
    team: String!
    image: String!
  }

  type Query {
    topRacers(limit: Int!): [Racer!]!
  }
`;
