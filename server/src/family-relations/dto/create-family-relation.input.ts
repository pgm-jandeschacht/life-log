import { 
  InputType, 
  Int, 
  Field 
} from '@nestjs/graphql';

@InputType()
export class CreateFamilyRelationInput {
  @Field(() => Int, )
  familyMemberId: number;
  
  @Field(() => Int, )
  relationTypeId: number;

  @Field(() => Int, )
  relatedFamilyMemberId: number;
}
