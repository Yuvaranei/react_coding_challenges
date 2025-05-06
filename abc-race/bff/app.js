import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs } from './src/graphql/schema.js';
import { resolvers } from './src/graphql/resolvers.js';
import { getTopRacers } from './src/services/leaderboardService.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/topRacers', async (req, res) => {
  const data = await getTopRacers();
  res.json(data);
});

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
app.use('/graphql', expressMiddleware(server));

export default app;
