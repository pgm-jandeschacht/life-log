import { 
  ObjectType, 
  Field, 
  Int 
} from '@nestjs/graphql';
import { FamilyRelation } from 'src/family-relations/entities/family-relation.entity';
import { 
  Column, 
  Entity, 
  OneToMany, 
  PrimaryGeneratedColumn 
} from 'typeorm';

@Entity()
@ObjectType()
export class RelationType {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'The ID of the Relation type' })
  id: number;

  @Column()
  @Field({ description: 'The name of the Relation type' })
  name: string;

  @OneToMany(() => FamilyRelation, familyRelation => familyRelation.relationType, {eager: true, cascade: true})
  @Field(type => [FamilyRelation], { description: 'The Family Relations to a specific Family Member' })
  familyRelations: FamilyRelation[];
}
