import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { Customer } from 'src/customers/customer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    TypeOrmModule.forFeature([Customer]),
  ],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
