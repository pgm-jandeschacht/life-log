import { CreateRelationTypeInput } from './create-relation-type.input';
import { 
  InputType, 
  Field, 
  PartialType 
} from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class UpdateRelationTypeInput extends PartialType(CreateRelationTypeInput) {
  @IsAlpha()
  @Field()
  name: string;
}
