import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { RelationType } from 'src/relation-types/entities/relation-type.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class FamilyRelation {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { description: 'The ID of the family member' })
    id: number;

    @ManyToOne(() => FamilyMember, familyMember => familyMember.familyRelationsTo, { onDelete: 'CASCADE' })
    @Field(type => FamilyMember, { description: 'The family member' })
    familyMember: FamilyMember;

    @ManyToOne(() => RelationType, relationType => relationType.familyRelations, { onDelete: 'SET NULL' })
    @Field(type => RelationType, { description: 'The relation to the other familyMember' })
    relationType: RelationType;

    @ManyToOne(() => FamilyMember, familyMember => familyMember.familyRelationsFrom, { onDelete: 'CASCADE' })
    @Field(type => FamilyMember, { description: 'The related family member' })
    relatedFamilyMember: FamilyMember;

    @Column()
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Column()
    @Field(type => Int, { description: 'The ID of the relation type' })
    relationTypeId: number;

    @Column()
    @Field(type => Int, { description: 'The ID of the related family member' })
    relatedFamilyMemberId: number;

    
}
