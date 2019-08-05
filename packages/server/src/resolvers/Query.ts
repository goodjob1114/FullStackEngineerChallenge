import { QueryResolvers } from '../generatedTypes';
import { getRepository } from 'typeorm';
import UserEntity from '../entity/User';
import ReviewEntity from '../entity/Review';

const Query: QueryResolvers = {
  users: async () => {
    const userRepository = getRepository(UserEntity);
    const users = await userRepository.find();
    return users;
  },
  reviews: async () => {
    const reviewRepository = getRepository(ReviewEntity);
    const reviews = await reviewRepository.find({ relations: ['from', 'to'] });
    return reviews;
  },
};

export default Query;
