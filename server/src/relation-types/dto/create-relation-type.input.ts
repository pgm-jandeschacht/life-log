import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateRelationTypeInput {

    @IsAlpha()
    @Field()
    name: string;
}
