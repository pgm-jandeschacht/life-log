import { 
  InputType, 
  Int, 
  Field 
} from '@nestjs/graphql';

@InputType()
export class CreateFamilyMemberInWishListItemInput {
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Field(type => Int, { description: 'The ID of the wishlist item' })
    wishListItemId: number;
}
