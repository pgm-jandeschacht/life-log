import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFamilyMemberInAgendaItemInput {
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Field(type => Int, { description: 'The ID of the agenda item' })
    agendaItemId: number;
}
