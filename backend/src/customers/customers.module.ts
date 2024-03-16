import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers.entity';
import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';
import { Order } from 'src/orders/orders.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    TypeOrmModule.forFeature([Order]),
  ],
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
