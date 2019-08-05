import { MutationResolvers } from '../generatedTypes';
import { getRepository } from 'typeorm';
import UserEntity from '../entity/User';

const Mutation: MutationResolvers = {
  createEmployee: async (_, { email, name }) => {
    const userRepository = getRepository(UserEntity);
    const user = new UserEntity();
    user.email = email;
    user.name = name;
    await userRepository.save(user);
    return user;
  },
  updateUser: async (_, { id, input }) => {
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne(id);
    if (!user) {
      // TODO: handler errors with apollo-error or similiar approaches
      throw new Error(`can not find the user id: ${id}`);
    }
    user.email = input.email == null ? user.email : input.email;
    user.name = input.name == null ? user.name : input.name;
    await userRepository.save(user);
    return user;
  },
};

export default Mutation;
