import { 
  InputType, 
  Int, 
  Field 
} from '@nestjs/graphql';

@InputType()
export class CreateLikedPictureInput {
  @Field(type => Int, { description: 'The ID of the family member who liked the picture' })
  familyMemberId: number;

  @Field(type => Int, { description: 'The ID of the picture that was liked' })
  albumItemId: number;
}
