import { 
  InputType, 
  Int, 
  Field 
} from '@nestjs/graphql';

@InputType()
export class CreateFamilyMemberInAlbumItemInput {
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Field(type => Int, { description: 'The ID of the album item' })
    albumItemId: number;
}
