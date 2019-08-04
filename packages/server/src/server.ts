// enable source map support in NodeJS
import 'source-map-support/register';
import { GraphQLServer } from 'graphql-yoga';
import { loader } from 'graphql.macro';
const typeDefs = loader('./typeDefs/index.graphql');

const resolvers = {};

const mocks = {
  Date: () => Date.now(),
};

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers, mocks });
server.start(options, () =>
  console.log('Server is running on localhost:' + options.port)
);
