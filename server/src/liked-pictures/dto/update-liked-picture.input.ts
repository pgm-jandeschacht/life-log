import { CreateLikedPictureInput } from './create-liked-picture.input';
import { 
  InputType, 
  Field, 
  Int, 
  PartialType 
} from '@nestjs/graphql';

@InputType()
export class UpdateLikedPictureInput extends PartialType(CreateLikedPictureInput) {
  @Field(type => Int, { description: 'The ID of the family member who liked the picture' })
  familyMemberId: number;

  @Field(type => Int, { description: 'The ID of the picture that was liked' })
  pictureId: number;
}
