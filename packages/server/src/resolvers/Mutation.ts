import { MutationResolvers } from '../generatedTypes';
import { getRepository } from 'typeorm';
import UserEntity from '../entity/User';
import ReviewEntity from '../entity/Review';

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
  createReview: async (_, { from, to }) => {
    const userRepository = getRepository(UserEntity);
    const reviewRepository = getRepository(ReviewEntity);
    // TODO: find users concurrently
    const fromUser = await userRepository.findOne(from);
    const toUser = await userRepository.findOne(to);
    const review = new ReviewEntity();
    // TODO: handler errors with apollo-error or similiar approaches
    if (!fromUser) {
      throw new Error(`can not find the user id: ${from}`);
    }
    if (!toUser) {
      throw new Error(`can not find the user id: ${to}`);
    }
    review.from = fromUser;
    review.to = toUser;
    await reviewRepository.save(review);
    return review;
  },
  updateReview: async (_, { id, feedback }) => {
    const reviewRepository = getRepository(ReviewEntity);
    const review = await reviewRepository.findOne(id);
    if (!review) {
      // TODO: handler errors with apollo-error or similiar approaches
      throw new Error(`can not find the user id: ${id}`);
    }
    review.feedback = feedback;
    review.submittedAt = new Date();
    await reviewRepository.save(review);
    return review;
  },
};

export default Mutation;
