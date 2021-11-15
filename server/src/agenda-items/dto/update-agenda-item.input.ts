import { CreateAgendaItemInput } from './create-agenda-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';

@InputType()
export class UpdateAgendaItemInput extends PartialType(CreateAgendaItemInput) {
    @Field({description: 'Name of the agenda-item'})
    title: string;

    // @Field({ nullable: true, description: 'Extra information about agenda-item'})
    // content?: string;

    // @Field(type => Int)
    // authorId: number;

}
