import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class FindOrderDto {
  @IsNotEmpty({ message: 'IDは必須事項です' })
  @Field()
  id: number;
}
