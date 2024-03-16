import { Field, ObjectType } from '@nestjs/graphql';
import { Customer } from 'src/customers/customers.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('order')
export class Order {
  @PrimaryGeneratedColumn({
    name: 'id',
    unsigned: true,
    type: 'smallint',
    comment: 'ID',
  })
  @Field()
  readonly id: number;

  @Column('text', { comment: '取引ID', nullable: true })
  @Field()
  readonly transaction_id?: string;

  @Column('text', { comment: '商品', nullable: true })
  @Field()
  readonly product?: string;

  @Column('text', { comment: '購入価格', nullable: true })
  @Field()
  readonly purchase_price?: string;

  @Column('text', { comment: '割引価格', nullable: true })
  @Field()
  readonly discount_price?: string;

  @Column('text', { comment: '購入日', nullable: true })
  @Field()
  readonly order_date?: string;

  @ManyToOne(() => Customer, (customer) => customer.orders)
  @Field(() => [Customer])
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
