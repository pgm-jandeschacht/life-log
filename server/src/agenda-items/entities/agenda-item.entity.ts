import { 
  ObjectType, 
  Field, 
  Int 
} from '@nestjs/graphql';
import { FamilyMemberInAgendaItem } from 'src/family-member-in-agenda-items/entities/family-member-in-agenda-item.entity';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { 
  Entity, 
  PrimaryGeneratedColumn, 
  ManyToOne, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn, 
  OneToMany 
} from 'typeorm';

@Entity()
@ObjectType()
export class AgendaItem {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { description: 'The ID of the agenda-item' })
    id:number;

    @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
    @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
    
    @Column()
    @Field({description: 'Content of the agenda-item'})
    content: string;

    @Column({ type: 'timestamp', nullable: true })
    @Field()
    date: Date;

    @Column()
    @Field(type => Int, { nullable: true })
    authorId?: number;

    @ManyToOne(() => FamilyMember, author => author.agendaItems, { onDelete: 'CASCADE' })
    @Field(type => FamilyMember, { description: 'Author of this agenda-item' })
    author: FamilyMember;

    // Many to Many, linked family members
    @OneToMany(() => FamilyMemberInAgendaItem, FamilyMemberInAgendaItem => FamilyMemberInAgendaItem.agendaItem, { cascade: true})
    @Field(type => [FamilyMemberInAgendaItem], { nullable: true, description: 'List of agendaItems where a family member is linked in'})
    inAgendaItem: FamilyMemberInAgendaItem[];
}
