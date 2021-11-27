// import { CreateFamilyMemberInAgendaItemInput } from './create-family-member-in-agenda-item.input';
import { CreateFamilyMemberInAgendaItemInput } from './create-family-member-in-agenda-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFamilyMemberInAgendaItemInput extends PartialType(CreateFamilyMemberInAgendaItemInput) {
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Field(type => Int, { description: 'The ID of the agenda item' })
    agendaItemId: number;
}
