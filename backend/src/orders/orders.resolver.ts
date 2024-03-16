import { FindOrderDto } from './dto/find-order.dto';
import { Order } from './order';
import { OrdersService } from './orders.service';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class OrdersResolver {
  constructor(private ordersService: OrdersService) {}

  @Query(() => Order)
  async getOrder(
    @Args('findOrder') findOrderDto: FindOrderDto,
  ): Promise<Order> {
    return this.ordersService.findOne(findOrderDto.id);
  }
}
