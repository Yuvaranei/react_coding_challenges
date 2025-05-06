import { gql } from "@apollo/client";

export const GET_TOP_RACERS = gql`
  query GetTopRacers {
    topRacers(limit: 5) {
      id
      name
      country
      team
      image
    }
  }
`;
