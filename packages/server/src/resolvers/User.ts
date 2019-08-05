import { UserResolvers } from '../generatedTypes';
import { getRepository } from 'typeorm';
import ReviewEntity from '../entity/Review';

const User: UserResolvers = {
  fromReviews: async user => {
    const reviewRepository = getRepository(ReviewEntity);
    const reviews = await reviewRepository.find({
      where: { from: user },
      relations: ['from', 'to'],
    });
    return reviews;
  },
  toReviews: async user => {
    const reviewRepository = getRepository(ReviewEntity);
    const reviews = await reviewRepository.find({
      where: { to: user },
      relations: ['from', 'to'],
    });
    return reviews;
  },
};

export default User;
