import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn({
    name: 'id',
    unsigned: true,
    type: 'smallint',
    comment: 'ID',
  })
  @Field()
  readonly id: number;

  @Column('text', { comment: '名', nullable: true })
  @Field()
  first_name?: string;

  @Column('text', { comment: '姓', nullable: true })
  @Field()
  last_name?: string;

  @Column('text', { comment: 'メールアドレス', nullable: true })
  @Field()
  email?: string;

  @Column('text', { comment: '電話番号', nullable: true })
  @Field()
  phone?: string;

  @Column('text', { comment: 'ユーザーネーム', nullable: true })
  @Field()
  username?: string;

  @Column('text', { comment: 'IPアドレス', nullable: true })
  @Field()
  ip_address?: string;
}
