import { 
  ObjectType, 
  Field, 
  Int 
} from '@nestjs/graphql';
import { FamilyMemberInWishListItem } from 'src/family-member-in-wish-list-item/entities/family-members-in-wish-list-item.entity';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  ManyToOne, 
  OneToMany, 
  PrimaryGeneratedColumn, 
  UpdateDateColumn 
} from 'typeorm';

@Entity()
@ObjectType()
export class WishListItem {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;

  @Column()
  @Field({ description: "Content of this wish" })
  content: string;

  @Column()
  @Field({ defaultValue: false })
  completed: boolean;

  @Column()
  @Field(type => Int, { nullable: true })
  authorId?: number;

  @ManyToOne(() => FamilyMember, author => author.wishListItems, { onDelete: 'SET NULL' })
  @Field(type => FamilyMember, { description: 'Who craeted this wish' })
  author: FamilyMember;

  @Column({ type: 'timestamp', nullable: true })
  @Field()
  dueDate?: Date;

  // Many to Many, linked family members
  @OneToMany(() => FamilyMemberInWishListItem, FamilyMemberInWishListItem => FamilyMemberInWishListItem.wishListItem, { cascade: true})
  @Field(type => [FamilyMemberInWishListItem], { nullable: true, description: 'List of wishlistItems where a family member is linked in'})
  inWishListItem: FamilyMemberInWishListItem[];
}
