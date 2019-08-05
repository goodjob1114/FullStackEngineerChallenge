import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Role } from '../generatedTypes';
import Review from './Review';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column('text')
  name!: string;

  @Column('text')
  email!: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Employee,
  })
  role!: Role;

  @CreateDateColumn()
  createdAt!: Date;

  @OneToMany(type => Review, review => review.from)
  fromReviews!: Review[];

  @OneToMany(type => Review, review => review.to)
  toReviews!: Review[];
}

export default User;
