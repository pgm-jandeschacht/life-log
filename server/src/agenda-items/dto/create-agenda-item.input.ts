import { InputType, Int, Field } from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { CreateDateColumn } from 'typeorm';

@InputType()
export class CreateAgendaItemInput {
    // @CreateDateColumn()
    @Field({description: 'Name of the agenda-item'})
    title: string;

    // @CreateDateColumn()
    @Field({description: 'Date of the agenda-item'})
    date: Date;



    // @Field({ nullable: true})
    // // @Field({ nullable: true, description: 'Extra information about agenda-item'})
    // content?: string;

    // @Field(type => Int)
    // authorId: number;
}
