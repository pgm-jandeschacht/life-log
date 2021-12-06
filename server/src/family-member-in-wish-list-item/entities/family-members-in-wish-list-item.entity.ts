import { ObjectType, Field, Int } from '@nestjs/graphql';
import { 
  Column, 
  Entity, 
  ManyToOne, 
  PrimaryGeneratedColumn 
} from 'typeorm';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { WishListItem } from 'src/wish-list-items/entities/wish-list-item.entity';

@Entity()
@ObjectType()
export class FamilyMemberInWishListItem {
    @PrimaryGeneratedColumn()
    @Field(type => Int, { description: 'The ID' })
    id: number;

    @Column()
    @Field(type => Int, { description: 'The ID of the family member' })
    familyMemberId: number;

    @Column()
    @Field(type => Int, { description: 'The ID of the wishlist item' })
    wishListItemId: number;

    @ManyToOne(() => FamilyMember, familyMember => familyMember.familyMemberInWishListItems, { onDelete: 'CASCADE' })
    @Field(type => FamilyMember, { description: 'The family member' })
    familyMember: FamilyMember;

    @ManyToOne(() => WishListItem, wishListItem => wishListItem.inWishListItem, { onDelete: 'CASCADE' })
    @Field(type => WishListItem, { description: 'The related wishlist item' })
    wishListItem: WishListItem;

}
