import { Args, Query, Resolver } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './customer';
import { FindCustomerDto } from './dto/find-customer.dto';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(private customersService: CustomersService) {}

  @Query(() => Customer)
  async getCustomer(
    @Args('findCustomer') findCustomerDto: FindCustomerDto,
  ): Promise<Customer> {
    return await this.customersService.findOne(findCustomerDto.id);
  }

  @Query(() => [Customer])
  public async getCustomerAll(): Promise<Customer[]> {
    return await this.customersService.findAll().catch((err) => {
      throw err;
    });
  }
}
