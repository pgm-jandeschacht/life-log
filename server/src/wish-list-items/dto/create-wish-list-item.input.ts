import { 
  InputType, 
  Int, 
  Field 
} from '@nestjs/graphql';
import { 
  IsBoolean, 
  IsString, 
  IsDate 
} from 'class-validator';

@InputType()
export class CreateWishListItemInput {
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
  created_at: Date;
  
  @IsDate()
  @Field()
  updated_at: Date;
}
