import { CreateFamilyMemberInAlbumItemInput } from './create-family-member-in-album-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFamilyMemberInAlbumItemInput extends PartialType(CreateFamilyMemberInAlbumItemInput) {
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Field(type => Int, { description: 'The ID of the album item' })
    albumItemId: number;
}
