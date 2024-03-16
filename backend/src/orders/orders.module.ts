import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './orders.entity';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';
import { Customer } from 'src/customers/customers.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order]),
    TypeOrmModule.forFeature([Customer]),
  ],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
