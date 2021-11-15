import { ObjectType, Field, Int, ArrayElement } from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ orderBy: {
    date: 'DESC',
}})
@ObjectType()
export class AgendaItem {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { description: 'The ID of the agenda-item' })
    id:number;

    //date

    //due

    @Column()
    @Field({description: 'Name of the agenda-item'})
    title: string;



    // @Column()
    // // @Field({ nullable: true, description: 'Extra information about agenda-item'})
    // @Field({ nullable: true})
    // content?: string;

    @Column()
    @Field(type => Int, { nullable: true })
    authorId?: number;

    @ManyToOne(() => FamilyMember, author => author.agendaItems, { onDelete: 'CASCADE' })
    @Field(type => FamilyMember, { description: 'Author of this agenda-item' })
    author: FamilyMember;

    @ManyToMany(() => FamilyMember, familyMember => familyMember.invitedAgendaItems, { onDelete: 'SET NULL' })
    @Field(type => FamilyMember, { nullable: true, description: 'List of family members invited for this agenda-item' })
    with?: FamilyMember[];

    @Column({ type: 'timestamp', nullable: true })
    // @CreateDateColumn()
    @Field()
    createdOn: Date;

    @Column({ type: 'timestamp', nullable: true })
    // @UpdateDateColumn()
    @Field()
    updatedOn: Date;

    @Column({ type: 'timestamp', nullable: true })
    @Field()
    date: Date;

}
