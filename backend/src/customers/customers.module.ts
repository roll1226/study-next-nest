import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer';
import { CustomersResolver } from './customers.resolver';
import { CustomersService } from './customers.service';
import { Task } from 'src/tasks/task';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer]),
    TypeOrmModule.forFeature([Task]),
  ],
  providers: [CustomersResolver, CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
