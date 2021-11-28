import { 
  ObjectType, 
  Field, 
  Int 
} from '@nestjs/graphql';
import { AgendaItem } from 'src/agenda-items/entities/agenda-item.entity';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { 
  Column, 
  Entity, 
  ManyToOne, 
  PrimaryGeneratedColumn 
} from 'typeorm';

@Entity()
@ObjectType()
export class FamilyMemberInAgendaItem {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { description: 'The ID' })
    id: number;

    @Column()
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Column()
    @Field(type => Int, { description: 'The ID of the agenda item' })
    agendaItemId: number;
    
    @ManyToOne(() => FamilyMember, familyMember => familyMember.FamilyMemberInAgendaItem, { onDelete: 'CASCADE' })
    @Field(type => FamilyMember, { description: 'The family member' })
    familyMember: FamilyMember;

    @ManyToOne(() => AgendaItem, agendaItem => agendaItem.inAgendaItem, { onDelete: 'SET NULL' })
    @Field(type => AgendaItem, { description: 'The related agenda item' })
    agendaItem: AgendaItem;

}
