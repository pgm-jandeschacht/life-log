import { CreateFamilyRelationInput } from './create-family-relation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFamilyRelationInput extends PartialType(CreateFamilyRelationInput) {
    @Field(() => Int, { description: 'Example field (placeholder)' })
    familyMemberId: number;
    
    @Field(() => Int, { description: 'Example field (placeholder)' })
    relationTypeId: number;

    @Field(() => Int, { description: 'Example field (placeholder)' })
    relatedFamilyMemberId: number;
}
