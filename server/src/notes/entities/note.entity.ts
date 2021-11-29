import { 
  ObjectType, 
  Field, 
  Int 
} from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  ManyToOne, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from 'typeorm';

@Entity()
@ObjectType()
export class Note {
  @PrimaryGeneratedColumn()
  @Field(type => Int, { description: 'The ID of the Note' })
  @Field(type => Int)
  id: number;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;

  @Column()
  @Field()
  content: string;

  @Column({ type: 'timestamp', nullable: true })
  @Field()
  date: Date;

  @Column()
  @Field(type => Int, { nullable: true })
  authorId?: number;

  @ManyToOne(() => FamilyMember, author => author.notes, { onDelete: 'CASCADE'})
  @Field(type => FamilyMember, { description: 'The author of the note' })
  author: FamilyMember;
}
