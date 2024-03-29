import { Args, Query, Resolver } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './customer';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private customersService: CustomersService) {}

  @Query(() => Customer)
  async getCustomer(
    @Args({ name: 'customerId' }) customerId: number,
  ): Promise<Customer> {
    return await this.customersService.findOne(customerId);
  }
}
