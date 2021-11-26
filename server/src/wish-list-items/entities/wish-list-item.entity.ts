import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FamilyMemberInWishListItem } from 'src/family-member-in-wish-list-item/entities/family-members-in-wish-list-item.entity';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class WishListItem {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

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

    

    //due
    
    
    // @ManyToMany(() => FamilyMember, FamilyMember => FamilyMember.inWishListItem, { onDelete: 'SET NULL' })
    // @Field(type => [FamilyMember], { nullable: true, description: 'Who is this wish for'})
    // inWishListItem?: FamilyMember[];




    @Column({ type: 'timestamp', nullable: true })
    @Field()
    dueDate?: Date;

    @CreateDateColumn()
    @Column({ type: 'timestamp', nullable: true })
    @Field()
    createdOn: Date;

    // Many to Many
    @OneToMany(() => FamilyMemberInWishListItem, FamilyMemberInWishListItem => FamilyMemberInWishListItem.wishListItem, { eager: true, cascade: true})
    @Field(type => [FamilyMemberInWishListItem], { nullable: true, description: 'List of wishlistItems where a family member is linked in'})
    wishlistWithInvitedFamilyMembers: FamilyMemberInWishListItem[];
}
