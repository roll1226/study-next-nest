import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './customer';
import { Repository } from 'typeorm';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async findOne(id: number): Promise<Customer> {
    return await this.customerRepository.findOne({
      where: { id },
      relations: ['tasks'],
    });
  }
}
