import { Resolvers } from '../generatedTypes';
import DateResolver from './Date';
import User from './User';
import Review from './Review';
import Query from './Query';

const resolvers: Resolvers = {
  Date: DateResolver,
  User,
  Review,
  Query,
};

export default resolvers;
