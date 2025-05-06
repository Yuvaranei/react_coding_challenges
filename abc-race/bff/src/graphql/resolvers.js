import { getTopRacers } from '../services/leaderboardService.js';

export const resolvers = {
  Query: {
    topRacers: async (_, { limit }) => {
      return await getTopRacers();
    }
  }
};
