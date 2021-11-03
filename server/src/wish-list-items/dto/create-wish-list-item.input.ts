import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWishListItemInput {
    
    @Field({ description: "Content of this wish" })
    content: string;

    
    @Field({ defaultValue: false })
    completed: boolean;

    
    @Field(type => Int, { nullable: true })
    authorId?: number;
}
