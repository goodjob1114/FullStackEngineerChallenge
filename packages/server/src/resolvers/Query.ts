import { QueryResolvers } from '../generatedTypes';
import { getRepository } from 'typeorm';
import UserEntity from '../entity/User';

const Query: QueryResolvers = {
  users: async () => {
    const userRepository = getRepository(UserEntity);
    const users = await userRepository.find();
    return users;
  },
};

export default Query;
