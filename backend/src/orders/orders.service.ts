import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async findOne(id: number): Promise<Order> | null {
    return this.orderRepository.findOne({
      where: { id },
      relations: ['customer'],
    });
  }
}
