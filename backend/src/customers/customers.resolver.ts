import { Args, Query, Resolver } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './customers.entity';
import { FindCustomerDto } from './dto/find-customer.dto';

@Resolver()
export class CustomersResolver {
  constructor(private customersService: CustomersService) {}

  @Query(() => Customer)
  async getCustomer(
    @Args('findCustomer') findCustomerDto: FindCustomerDto,
  ): Promise<Customer> {
    return this.customersService.findOne(findCustomerDto.id);
  }
}
