import { mockRacers } from './mockData.js';

export const getTopRacers = async () => {
  try {
    return mockRacers;
  } catch (error) {
    console.error("Error fetching top racers:", error);
    return [];
  }
};