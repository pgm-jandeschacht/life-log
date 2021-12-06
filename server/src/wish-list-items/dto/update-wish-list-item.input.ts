import { CreateWishListItemInput } from './create-wish-list-item.input';
import { 
  InputType, 
  Field, 
  Int, 
  PartialType 
} from '@nestjs/graphql';
import { 
  IsBoolean, 
  IsDate, 
  IsString 
} from 'class-validator';

@InputType()
export class UpdateWishListItemInput extends PartialType(CreateWishListItemInput) {
  @IsString()
  @Field({ description: "Content of this wish" })
  content: string;

  @IsBoolean()
  @Field({ defaultValue: false })
  completed: boolean;

  @Field(type => Int, { nullable: true })
  authorId?: number;

  @Field(type => [Int], { nullable: true })
  inWish?: number[];

  @IsDate()  
  @Field()
  dueDate?: Date;
  
  @IsDate()
  @Field()
  updated_at: Date;
}
