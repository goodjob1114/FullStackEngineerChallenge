// enable source map support in NodeJS
import 'source-map-support/register';
import { GraphQLServer } from 'graphql-yoga';
import { loader } from 'graphql.macro';
import { createConnection } from 'typeorm';
import config from '../ormconfig.js';
import resolvers from './resolvers';

const typeDefs = loader('./typeDefs/index.graphql');

const options = { port: 4000 };
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

const start = async () => {
  // TODO: fix the following type error
  // @ts-ignore-next
  await createConnection(config);
  console.log(`Connected to the db at  ${config.host}:${config.port}`);

  await server.start(options);
  console.log('Server is running on localhost:' + options.port);
};

start();
