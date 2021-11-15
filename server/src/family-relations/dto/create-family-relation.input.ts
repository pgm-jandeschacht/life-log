import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateFamilyRelationInput {

    
    @Field(() => Int, )
    familyMemberId: number;
    
    @Field(() => Int, )
    relationTypeId: number;

    @Field(() => Int, )
    relatedFamilyMemberId: number;
}
