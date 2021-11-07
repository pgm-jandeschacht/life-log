import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FamilyMember } from 'src/family-members/entities/family-member.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

    // @Column()
    // @Field(type => Int, { nullable: true })
    // authorId?: number;

    @ManyToOne(() => FamilyMember, uploader => uploader.wishListItems, { onDelete: 'SET NULL' })
    @Field(type => FamilyMember, { description: 'Who craeted this wish' })
    author: FamilyMember;

    //due
    
    
    @ManyToMany(() => FamilyMember, FamilyMember => FamilyMember.inWishListItem, { onDelete: 'SET NULL' })
    @Field(type => [FamilyMember], { nullable: true, description: 'Who is this wish for'})
    for?: FamilyMember[];

}
