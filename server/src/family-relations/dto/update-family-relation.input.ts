import { CreateFamilyRelationInput } from './create-family-relation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFamilyRelationInput extends PartialType(CreateFamilyRelationInput) {
  @Field(() => Int)
  id: number;
}
