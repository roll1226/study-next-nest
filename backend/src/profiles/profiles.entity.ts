import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('profile')
export class Profile {
  @PrimaryGeneratedColumn({
    name: 'id',
    unsigned: true,
    type: 'smallint',
    comment: 'ID',
  })
  @Field()
  readonly id: number;

  @Column('varchar', { comment: '名前' })
  @Field()
  name: string;
}
