import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Task } from 'src/task/task';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customers')
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn({
    name: 'id',
    unsigned: true,
    type: 'int',
    comment: 'Customer ID',
  })
  @Field(() => ID)
  readonly id: number;

  @Column('text', { comment: 'ユーザーネーム' })
  @Field()
  readonly username: string;

  @CreateDateColumn({ comment: '作成日時' })
  @Field()
  readonly created_at: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  @Field()
  readonly updated_at: Date;

  @OneToMany(() => Task, (task) => task.customer)
  @Field(() => [Task])
  readonly tasks: Task[];
}
