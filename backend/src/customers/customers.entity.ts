import { Field, ObjectType } from '@nestjs/graphql';
import { Order } from 'src/orders/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
  readonly first_name?: string;

  @Column('text', { comment: '姓', nullable: true })
  @Field()
  readonly last_name?: string;

  @Column('text', { comment: 'メールアドレス', nullable: true })
  @Field()
  readonly email?: string;

  @Column('text', { comment: '電話番号', nullable: true })
  @Field()
  readonly phone?: string;

  @Column('text', { comment: 'ユーザーネーム', nullable: true })
  @Field()
  readonly username?: string;

  @Column('text', { comment: 'IPアドレス', nullable: true })
  @Field()
  readonly ip_address?: string;

  @OneToMany(() => Order, (order) => order.customer)
  @Field(() => [Order])
  orders: Order[];
}
