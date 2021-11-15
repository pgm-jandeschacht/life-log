import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Note {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    content: string;

    @Column()
    @Field(type => Int, { nullable: true })
    authorId?: number;

    @ManyToOne(() => FamilyMember, author => author.notes, { onDelete: 'CASCADE'})
    @Field(type => FamilyMember, { description: 'The author of the note' })
    author: FamilyMember;

    @Column({type: 'timestamp', nullable: true})
    @Field()
    createdOn: Date;
}
