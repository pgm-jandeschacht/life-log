import { CreateWishListItemInput } from './create-wish-list-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWishListItemInput extends PartialType(CreateWishListItemInput) {
    @Field({ description: "Content of this wish" })
    content: string;

    
    @Field({ defaultValue: false })
    completed: boolean;

    
    // @Field(type => Int, { nullable: true })
    // authorId?: number;
}
