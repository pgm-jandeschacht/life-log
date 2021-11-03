import { InputType, Int, Field } from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';

@InputType()
export class CreateAgendaItemInput {
    @Field({description: 'Name of the agenda-item'})
    title: string;

    // @Field({ nullable: true})
    // // @Field({ nullable: true, description: 'Extra information about agenda-item'})
    // content?: string;

    @Field(type => Int)
    authorId: number;
}
