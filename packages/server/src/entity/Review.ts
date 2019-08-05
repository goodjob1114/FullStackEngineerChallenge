import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import User from './User';

@Entity()
class Review {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn()
  createdAt!: string;

  @Column('timestamp')
  submittedAt!: number;

  @ManyToOne(type => User, user => user.fromReviews)
  from!: User;

  @ManyToOne(type => User, user => user.toReviews)
  to!: User;

  @Column('text')
  feedback!: string;
}

export default Review;
