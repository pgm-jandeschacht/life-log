import { CreateFamilyMemberInWishListItemInput } from './create-family-member-in-wish-list-item.input';
import { 
  InputType, 
  Field, 
  Int, 
  PartialType 
} from '@nestjs/graphql';

@InputType()
export class UpdateFamilyMemberInWishListItemInput extends PartialType(CreateFamilyMemberInWishListItemInput) {
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Field(type => Int, { description: 'The ID of the wishlist item' })
    wishListItemId: number;
}
