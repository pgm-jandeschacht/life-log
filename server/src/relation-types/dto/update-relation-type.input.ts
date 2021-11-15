import { CreateRelationTypeInput } from './create-relation-type.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRelationTypeInput extends PartialType(CreateRelationTypeInput) {
  
    @Field()
    name: string;
}
