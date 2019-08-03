import users from '../UserList/data';
import { Review } from './ReviewsTable';

const reviews: Review[] = [
  {
    id: '1',
    from: users[0],
    to: users[1],
    feedback: '',
    createdAt: 1555016400000,
  },
  {
    id: '2',
    from: users[0],
    to: users[2],
    feedback: `
Jim continues to be a valued member of our crew and is a person we are able to count on. Jim’s focus to
his attendance and punctuality has made our core group operate significantly better over the past 12
months.`,
    createdAt: 1555016400000,
    submittedAt: 1555116400000,
  },
  {
    id: '3',
    from: users[0],
    to: users[3],
    feedback: `Heather does not show up for work on time nor does she work a normal work schedule.`,
    createdAt: 1555016400000,
    submittedAt: 1555116400000,
  },
];

export default reviews;
